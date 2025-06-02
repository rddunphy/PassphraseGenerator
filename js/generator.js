let loadedWords = {};

async function fetchAndParseCSV(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status} - Could not fetch ${filePath}. Make sure the file exists in the same directory.`);
        return null;
    }
    const csvText = await response.text();
    return parseCSV(csvText);
}

function parseCSV(csvText) {
    const lines = csvText.trim().split(/\r?\n/);
    if (lines.length === 0) {
        return []; // Return empty array if CSV is empty
    }
    const headers = lines[0].split(',').map(header => header.trim());
    const dataArray = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        const values = line.split(',').map(value => value.trim());
        if (values.length === headers.length) {
            const rowObject = {};
            headers.forEach((header, index) => {
                rowObject[header] = values[index];
            });
            dataArray.push(rowObject);
        } else {
            console.warn(`Skipping line ${i + 1}: Number of values (${values.length}) does not match number of headers (${headers.length}). Line content: "${line}"`);
        }
    }
    return dataArray;
}

async function loadWordsFromCSV() {
    loadedWords.verbs = await fetchAndParseCSV("../data/verbs.csv")
    loadedWords.nouns = await fetchAndParseCSV("../data/nouns.csv")
    loadedWords.adjectives = await fetchAndParseCSV("../data/adjectives.csv")
    loadedWords.adverbs = await fetchAndParseCSV("../data/adverbs.csv")
    loadedWords.connectives = await fetchAndParseCSV("../data/connectives.csv")
}

loadWordsFromCSV().then(
    function() {generate();}
);

function correctCase(words) {
    const c = $("input[name=case]:checked").val();
    if (c === "sentence") {
        words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    } else if (c === "title") {
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else if (c === "upper") {
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toUpperCase();
        }
    }
    return words;
}

function renderNounPhrase(structure, units) {
    const words = [];
    for (let k = 0; k < structure.length; k++) {
        let unit = units[structure[k].nounUnitIndex];
        if (k > 0) {
            words.push(structure[k].connective);
        }
        let definite = randomBool();
        if (definite) {
            words.push("the");
        } else if (!unit.isPlural) {
            if (unit.adjectives?.length) {
                words.push(unit.adjectives[0].article);
            } else {
                words.push(unit.noun.article);
            }
        }
        unit.adjectives.forEach(wordObj => {words.push(wordObj.adjective)});
        if (unit.isPlural) {
            words.push(unit.noun.plural);
        } else {
            words.push(unit.noun.singular);
        }
    }
    return words;
}

function renderVerbPhrase(verbObj, adverbList, isPlural) {
    const words = [];
    adverbList.forEach(adverbObj => {words.push(adverbObj.adverb)});
    let present = randomBool();
    if (present) {
        if (isPlural) {
            words.push(verbObj.plural);
        } else {
            words.push(verbObj.singular);
        }
    } else {
        words.push(verbObj.past);
    }
    return words;
}

function wordEntropy(pos) {
    let entropy = 0;
    let nWords;
    if (pos === "noun") {
        entropy += 1;  // Singular/plural
        nWords = loadedWords.nouns.length;
    } else if (pos === "verb") {
        entropy += 1;  // Past/present
        nWords = loadedWords.verbs.length;
    } else if (pos === "adjective") {
        nWords = loadedWords.adjectives.length;
    } else if (pos === "adverb") {
        nWords = loadedWords.adverbs.length;
    } else if (pos === "connective") {
        nWords = loadedWords.connectives.length;
    }
    entropy += Math.log2(nWords);
    return entropy;
}

function generateSentence(nMainWords) {
    if (!loadedWords.nouns?.length || !loadedWords.verbs?.length) {
        return "Error: Noun or Verb list is empty. Cannot generate sentence.";
    }
    let nounUnits = [];  // Stores all { adjectives: [], noun: nounObj }
    let subjectStructure = [];  // Stores { connective?: string, nounUnitIndex: number }
    let objectStructure = [];
    let verbObj = randomChoice(loadedWords.verbs);
    let adverbList = [];
    let noun1Obj = randomChoice(loadedWords.nouns);
    let subject_plural = randomBool();
    nounUnits.push({ adjectives: [], noun: noun1Obj, isPlural: subject_plural });
    subjectStructure.push({ nounUnitIndex: 0 });
    let noun2Obj = randomChoice(loadedWords.nouns);
    nounUnits.push({ adjectives: [], noun: noun2Obj, isPlural: randomBool() });
    objectStructure.push({ nounUnitIndex: 1 });
    let currentMainWords = 3;
    let entropy = 2 * wordEntropy("noun") + wordEntropy("verb");
    let wordsToPlace = nMainWords - currentMainWords
    for (let k = 0; k < wordsToPlace; k++) {
        // Create array of all possible word additions
        let possibleActions = [];
        for (let j = 0; j < nounUnits.length; j++) {
            if (loadedWords.adjectives?.length) possibleActions.push({ type: 'add_adj', target_idx: j });
        }
        if (loadedWords.adverbs?.length) possibleActions.push({ type: 'add_adv' });
        if (loadedWords.connectives?.length && loadedWords.nouns?.length) {
             possibleActions.push({ type: 'add_noun_to_np1' });
        }
        if (loadedWords.connectives?.length && loadedWords.nouns?.length) {
            possibleActions.push({ type: 'add_noun_to_np2' });
        }

        let chosenAction = randomChoice(possibleActions);

        if (chosenAction.type === 'add_adj') {
            nounUnits[chosenAction.target_idx].adjectives.push(randomChoice(loadedWords.adjectives));
            entropy += wordEntropy("adjective");
        } else if (chosenAction.type === 'add_adv') {
            adverbList.push(randomChoice(loadedWords.adverbs));
            entropy += wordEntropy("adverb");
        } else if (chosenAction.type === 'add_noun_to_np1') {
            subject_plural = true;
            let newNoun = randomChoice(loadedWords.nouns);
            let connObj = randomChoice(loadedWords.connectives);
            nounUnits.push({ adjectives: [], noun: newNoun, isPlural: randomBool() });
            subjectStructure.push({ connective: connObj.connective, nounUnitIndex: nounUnits.length - 1 });
            entropy += wordEntropy("noun") + wordEntropy("connective");
        } else if (chosenAction.type === 'add_noun_to_np2') {
            let newNoun = randomChoice(loadedWords.nouns);
            let connObj = randomChoice(loadedWords.connectives);
            nounUnits.push({ adjectives: [], noun: newNoun, isPlural: randomBool() });
            objectStructure.push({ connective: connObj.connective, nounUnitIndex: nounUnits.length - 1 });
            entropy += wordEntropy("noun") + wordEntropy("connective");
        }
    }

    let subjectWords = renderNounPhrase(subjectStructure, nounUnits);
    let verbWords = renderVerbPhrase(verbObj, adverbList, subject_plural);
    let objectWords = renderNounPhrase(objectStructure, nounUnits);
    return {words: subjectWords.concat(verbWords, objectWords), entropy: entropy};
}

function generate() {
    const nMainWords = $("#number_of_words").val();
    const sentenceObj = generateSentence(nMainWords);
    const words = correctCase(sentenceObj.words);
    const sentence = words.join($("input[name=separator]").val()) + $("input[name=terminator]").val();
    $("#passphrase_field").val(sentence);
    $("#entropy_field").html(sentenceObj.entropy.toFixed(1));
    evaluate();
}

function evaluate() {
    const pw = $("#passphrase_field").val();
    $("#character_count").html(pw.length);
}

async function copyToClipboard() {
    const type = "text/plain";
    const clipboardItemData = {
        [type]: $("#passphrase_field").val(),
    }
    const clipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
}

window.onload = function() {
    $(".wrapper").on("scroll", function () {
        if ($(".wrapper").scrollTop() > 0) {
            $(".ribbon").addClass("hidden");
        } else {
            $(".ribbon").removeClass("hidden");
        }
    });
    $("#generate_button").on("click", generate);
    $("#copy_button").on("click", copyToClipboard);
    $("#faq_link").on("click", function () {
        $("#options").collapse("hide");
        $("#evaluation").collapse("hide");
        $("#faq").collapse("toggle");
    });
    $("#options_link").on("click", function () {
        $("#faq").collapse("hide");
        $("#evaluation").collapse("hide");
        $("#options").collapse("toggle");
    });
    $("#evaluation_link").on("click", function () {
        $("#options").collapse("hide");
        $("#faq").collapse("hide");
        $("#evaluation").collapse("toggle");
    });
    $("#passphrase_field").on("input", evaluate);
    $("#number_of_words").on("input", generate);
    $("input[name=case]").on("input", generate);
    $("input[name=separator]").on("input", generate);
    $("input[name=terminator]").on("input", generate);
    loadWordsFromCSV();
}

function calculateMeanEntropy(maxWords, nRuns) {
    for (let n = 3; n <= maxWords; n++) {
        let total = 0;
        for (let k = 0; k < nRuns; k++) {
            const obj = generateSentence(n);
            total += obj.entropy;
        }
        const mean = total / nRuns;
        console.log(`Average entropy for ${n} words: ${mean.toFixed(1)} bits`);
    }
}

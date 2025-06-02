let loadedWords = {};
let meanEntropyValues = {};

async function fetchAndParseCSV(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status} - Could not fetch ${filePath}. Make sure the file exists in the data directory.`);
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
    loadedWords.verbs = await fetchAndParseCSV("../data/verbs.csv");
    loadedWords.nouns = await fetchAndParseCSV("../data/nouns.csv");
    loadedWords.adjectives = await fetchAndParseCSV("../data/adjectives.csv");
    loadedWords.adverbs = await fetchAndParseCSV("../data/adverbs.csv");
    loadedWords.connectives = await fetchAndParseCSV("../data/connectives.csv");
    const fpath = "../data/mean_entropy_values.json"
    const response = await fetch(fpath);
    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status} - Could not fetch ${fpath}. Make sure the file exists in the data directory.`);
        return null;
    }
    meanEntropyValues = await response.json();
}

loadWordsFromCSV().then(
    function() {
        generate();
        updateNumberOfWordsSelectEntropies();
    }
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
    let entropy = 0;
    for (let k = 0; k < structure.length; k++) {
        let unit = units[structure[k].nounUnitIndex];
        if (k > 0) {
            words.push(structure[k].connective.base);
            entropy += structure[k].connective.entropy;
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
        unit.adjectives.forEach((wordObj) => {words.push(wordObj.base)});
        if (unit.isPlural) {
            words.push(unit.noun.plural);
        } else {
            words.push(unit.noun.base);
        }
        unit.adjectives.forEach((wordObj) => {entropy += wordObj.entropy});
        entropy += unit.noun.entropy;
    }
    return {words: words, entropy: entropy};
}

function renderVerbPhrase(verbObj, adverbList, isPlural) {
    const words = [];
    adverbList.forEach((adverbObj) => {words.push(adverbObj.base)});
    let present = randomBool();
    if (present) {
        if (isPlural) {
            words.push(verbObj.plural);
        } else {
            words.push(verbObj.base);
        }
    } else {
        words.push(verbObj.past);
    }
    let entropy = 0;
    adverbList.forEach((adverbObj) => {entropy += adverbObj.entropy});
    entropy += verbObj.entropy;
    return {words: words, entropy: entropy};
}

function chooseWord(wordSet, maxWordLength) {
    if (maxWordLength > 0) {
        wordSet = wordSet.filter((wordObj) => wordObj.base.length <= maxWordLength);
    }
    const obj = randomChoice(wordSet);
    obj.entropy = Math.log2(wordSet.length);
    if (wordSet === loadedWords.nouns || wordSet === loadedWords.verbs) {
        // Verbs get one extra bit of entropy for present/past tense; nouns get one extra bit
        // of entropy for singular/plural
        obj.entropy += 1;
    }
    return obj;
}

function generateSentence(nMainWords, maxWordLength) {
    if (!loadedWords.nouns?.length || !loadedWords.verbs?.length) {
        return "Error: Noun or Verb list is empty. Cannot generate sentence.";
    }
    let nounUnits = [];  // Stores all { adjectives: [], noun: nounObj }
    let subjectStructure = [];  // Stores { connective?: string, nounUnitIndex: number }
    let objectStructure = [];
    let verbObj = chooseWord(loadedWords.verbs, maxWordLength);
    let adverbList = [];
    let noun1Obj = chooseWord(loadedWords.nouns, maxWordLength);
    let subject_plural = randomBool();
    nounUnits.push({ adjectives: [], noun: noun1Obj, isPlural: subject_plural });
    subjectStructure.push({ nounUnitIndex: 0 });
    let noun2Obj = chooseWord(loadedWords.nouns, maxWordLength);
    nounUnits.push({ adjectives: [], noun: noun2Obj, isPlural: randomBool() });
    objectStructure.push({ nounUnitIndex: 1 });
    let currentMainWords = 3;
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
            nounUnits[chosenAction.target_idx].adjectives.push(chooseWord(loadedWords.adjectives, maxWordLength));
        } else if (chosenAction.type === 'add_adv') {
            adverbList.push(chooseWord(loadedWords.adverbs, maxWordLength));
        } else if (chosenAction.type === 'add_noun_to_np1') {
            subject_plural = true;
            let newNoun = chooseWord(loadedWords.nouns, maxWordLength);
            let connObj = chooseWord(loadedWords.connectives, maxWordLength);
            nounUnits.push({ adjectives: [], noun: newNoun, isPlural: randomBool() });
            subjectStructure.push({ connective: connObj, nounUnitIndex: nounUnits.length - 1 });
        } else if (chosenAction.type === 'add_noun_to_np2') {
            let newNoun = chooseWord(loadedWords.nouns, maxWordLength);
            let connObj = chooseWord(loadedWords.connectives, maxWordLength);
            nounUnits.push({ adjectives: [], noun: newNoun, isPlural: randomBool() });
            objectStructure.push({ connective: connObj, nounUnitIndex: nounUnits.length - 1 });
        }
    }

    let subjectWords = renderNounPhrase(subjectStructure, nounUnits);
    let verbWords = renderVerbPhrase(verbObj, adverbList, subject_plural);
    let objectWords = renderNounPhrase(objectStructure, nounUnits);
    let words = subjectWords.words.concat(verbWords.words, objectWords.words);
    let entropy = subjectWords.entropy + verbWords.entropy + objectWords.entropy;
    return {words: words, entropy: entropy};
}

function getSentenceEntropy(sentenceWords) {
    for (let k=0; k<sentenceWords.length;k++){
        console.log(sentenceWords[k].entropy);
        console.log(sentenceWords[k].entropy ?? 0);
    }
    return sentenceWords.reduce(
        (sum, wordObj) => sum + wordObj.entropy ?? 0, 0
    )
}

function generate() {
    const nMainWords = $("#number_of_words").val();
    const maxWordLength = $("#max_word_length").val();
    const sentenceWords = generateSentence(nMainWords, maxWordLength);
    const entropy = sentenceWords.entropy;
    const words = correctCase(sentenceWords.words);
    const sentence = words.join($("input[name=separator]").val()) + $("input[name=terminator]").val();
    $("#passphrase_field").val(sentence);
    $("#entropy_field").html(entropy.toFixed(1));
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
    $("#max_word_length").on("input", function() {
        updateNumberOfWordsSelectEntropies();
        generate();
    });
    $("input[name=case]").on("input", generate);
    $("input[name=separator]").on("input", generate);
    $("input[name=terminator]").on("input", generate);
    loadWordsFromCSV();
}

function updateNumberOfWordsSelectEntropies() {
    const maxWordLength = $("#max_word_length").val();
    const key = "max_word_length_" + maxWordLength;
    const entropies = meanEntropyValues[key]
    entropies.forEach((e) => {
        let numWords = e.num_words;
        let entropy = e.entropy;
        let $optionsToUpdate = $("#number_of_words").find('option').filter(function() {
            return $(this).text().trim().split(' ')[0] === `${numWords}`;
        });
        if ($optionsToUpdate.length > 0) {
            let new_val = numWords + " (~" + entropy.toFixed(0) + " bits of entropy)";
            $optionsToUpdate.text(new_val);
        } else {
            console.warn("No option found with text: '" + numWords + "'");
        }
    });
}

function calculateMeanEntropy(maxWords, maxWordLengths, nRuns) {
    for (let n = 3; n <= maxWords; n++) {
        for (let i = 0; i < maxWordLengths.length; i++) {
            let total = 0;
            for (let k = 0; k < nRuns; k++) {
                const words = generateSentence(n, maxWordLengths[i]);
                total += words.entropy;
            }
            const mean = total / nRuns;
            console.log(`Average entropy for ${n} words with max. word length ${maxWordLengths[i]}: ${mean.toFixed(1)} bits`);
        }
    }
}

function testEntropy() {
    calculateMeanEntropy(10, [5], 1000);
}

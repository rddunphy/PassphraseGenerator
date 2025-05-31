function article(plural, definite, vowelSound) {
    if (definite) {
        return "the";
    }
    if (plural) {
        return "";
    }
    if (vowelSound) {
        return "an";
    }
    return "a";
}

function conjunction() {
    return randomChoice(["and", "or", "with", "without"]);
}

function nounPhrase(plural, definite, useAdj) {
    var adj_l = randomChoice(adjectives);
    var adj = adj_l[0];
    var noun_l = randomChoice(nouns);
    var noun = noun_l[plural ? 1 : 0];
    if (useAdj) {
        var art = article(plural, definite, adj_l[1]);
    } else {
        var art = article(plural, definite, noun_l[2]);
    }
    if (useAdj) {
        if (art != "") {
            return [art, adj, noun];
        }
        return [adj, noun];
    }
    if (art != "") {
        return [art, noun];
    }
    return [noun];
}

function verbPhrase(plural, past) {
    var verb = randomChoice(verbs);
    if (past) {
        return verb[2];
    }
    if (plural) {
        return verb[0];
    }
    return verb[1];
}

function correctCase(words) {
    var c = $("input[name=case]:checked").val();
    if (c == "sentence") {
        words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    } else if (c == "title") {
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else if (c == "upper") {
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].toUpperCase();
        }
    }
    return words;
}

function getAdjPositions(nNounPhrases, nAdjectives) {
    return randomChoices(Array.from({ length: nNounPhrases }, (_, index) => index), nAdjectives);
}

function generate() {
    var nWords = $("#number_of_words").val();
    var nNounPhrases = Math.ceil((nWords - 1) / 2);
    var nAdjectives = nWords - 1 - nNounPhrases;
    var adjPos = getAdjPositions(nNounPhrases, nAdjectives);
    var subjPl = randomBool();
    var subjDef = randomBool();
    var objPl = randomBool();
    var objDef = randomBool();
    var vPast = randomBool();
    var words = nounPhrase(subjPl, subjDef, adjPos.includes(0));
    words.push(verbPhrase(subjPl, vPast));
    for (k = 1; k < nNounPhrases; k++) {
        words = words.concat(nounPhrase(objPl, objDef, adjPos.includes(k)));
        if (k < nNounPhrases - 1) {
            words.push(conjunction());
        }
    }
    words = correctCase(words);
    var sentence = words.join($("input[name=separator]").val()) + $("input[name=terminator]").val();
    $("#passphrase_field").val(sentence);
    evaluate();
}

function evaluate() {
    var pw = $("#passphrase_field").val();
    $("#character_count").html(pw.length);
}

function copyToClipboard() {
    $("#passphrase_field").select();
    document.execCommand("copy");
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
    $("#faq_link").on("click", function() {
        $("#faq").collapse("toggle");
        $("#options").collapse("hide");
        $("#evaluation").collapse("hide");
    });
    $("#options_link").on("click", function() {
        $("#options").collapse("toggle");
        $("#faq").collapse("hide");
        $("#evaluation").collapse("hide");
    });
    $("#passphrase_field").on("input", evaluate);
    $("#number_of_words").on("input", generate);
    $("input[name=case]").on("input", generate);
    $("input[name=separator]").on("input", generate);
    $("input[name=terminator]").on("input", generate);
    generate();
}

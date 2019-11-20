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

function verbPhrase(plural, past, useAdv) {
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

function getAdjPositions() {
    var nWords = $("input[name=words]").val();
    return randomChoices([0, 1, 2], nWords - 3);
}

function generate() {
    var adjPos = getAdjPositions();
    var subjPl = randomBool();
    var subjDef = randomBool();
    var objPl = randomBool();
    var objDef = randomBool();
    var vPast = randomBool();
    var words = nounPhrase(subjPl, subjDef, adjPos.includes(0));
    words.push(verbPhrase(subjPl, vPast, adjPos.includes(1)));
    words = words.concat(nounPhrase(objPl, objDef, adjPos.includes(2)));
    words = correctCase(words);
    var sentence = words.join($("input[name=separator]").val()) + $("input[name=terminator]").val();
    $("#passphrase_field").val(sentence);
    evaluate();
}

function evaluate() {
    var pw = $("#passphrase_field").val();
    $("#character_count").html(pw.length);
    var result = zxcvbn(pw);
    $("#time_to_crack").html(result.crack_times_display.offline_fast_hashing_1e10_per_second);
    var feedback = [];
    if (result.feedback.warning) {
        feedback.push(result.feedback.warning);
    }
    if (result.feedback.suggestions) {
        feedback = feedback.concat(result.feedback.suggestions);
    }
    if (feedback.length > 0) {
        for (var i = 0; i < feedback.length; i++) {
            if (feedback[i][feedback[i].length - 1] != ".") {
                feedback[i] += ".";
            }
        }
        $("#feedback_paragraph").html(feedback.join(" "));
        $("#feedback_paragraph").show();
    } else {
        $("#feedback_paragraph").hide();
    }
}

function copyToClipboard() {
    $("#passphrase_field").select();
    document.execCommand("copy");
}

window.onload = function() {
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
    $("#eval_link").on("click", function() {
        $("#evaluation").collapse("toggle");
        $("#faq").collapse("hide");
        $("#options").collapse("hide");
    });
    $("#passphrase_field").on("input", evaluate);
    generate();
}

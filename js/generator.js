function random_choice(l) {
    return l[Math.floor(Math.random() * l.length)];
}

function random_bool() {
    return Math.random() >= 0.5;
}

function article(plural, definite, vowel_sound) {
    if (definite) {
        return "the";
    }
    if (plural) {
        return "";
    }
    if (vowel_sound) {
        return "an";
    }
    return "a";
}

function noun_phrase(plural, definite) {
    var adj_l = random_choice(adjectives);
    var adj = adj_l[0];
    var art = article(plural, definite, adj_l[1]);
    var noun = random_choice(nouns)[plural ? 1 : 0];
    if (art != "") {
        return [art, adj, noun];
    }
    return [adj, noun];
}

function verb(plural, past) {
    var verb = random_choice(verbs);
    if (past) {
        return verb[2];
    }
    if (plural) {
        return verb[0];
    }
    return verb[1];
}

function correct_case(words) {
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

function generate() {
    var subj_pl = random_bool();
    var subj_def = random_bool();
    var obj_pl = random_bool();
    var obj_def = random_bool();
    var v_past = random_bool();
    var words = noun_phrase(subj_pl, subj_def);
    words.push(verb(subj_pl, v_past));
    words = words.concat(noun_phrase(obj_pl, obj_def));
    words = correct_case(words);
    var sentence = words.join(" ") + ".";
    $("#passphrase_field").val(sentence);
}

function evaluate() {
    var pw = $("#passphrase_field").val();
    var result = zxcvbn(pw);
    var disp_time = result.crack_times_display.offline_fast_hashing_1e10_per_second;
    var feedback = ["This password would take " + disp_time + " to crack."];
    if (result.feedback.warning) {
        feedback.push(result.feedback.warning);
    }
    if (result.feedback.suggestions) {
        feedback = feedback.concat(result.feedback.suggestions);
    }
    for (var i = 0; i < feedback.length; i++) {
        if (feedback[i][feedback[i].length - 1] != ".") {
            feedback[i] += ".";
        }
    }
    var msg = feedback.join(" ");
    alert(msg);
}

window.onload = function() {
    generate();
    $("#generate_button").on("click", generate);
    $("#evaluate_button").on("click", evaluate);
}

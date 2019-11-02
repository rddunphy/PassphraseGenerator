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

function generate() {
    var subj_pl = random_bool();
    var subj_def = random_bool();
    var obj_pl = random_bool();
    var obj_def = random_bool();
    var v_past = random_bool();
    var words = noun_phrase(subj_pl, subj_def);
    words.push(verb(subj_pl, v_past));
    words = words.concat(noun_phrase(obj_pl, obj_def));
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    var sentence = words.join(" ") + "."
    $("#passphrase_field").val(sentence);
}

window.onload = function() {
    generate();
    $("#generate_button").on("click", generate);
}

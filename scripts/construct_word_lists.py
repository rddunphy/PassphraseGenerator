import csv
import os
import re

import inflect
import nltk
from lemminflect import getLemma, getAllInflections


def construct_noun_list(fpath, p):
    noun_dict = {}
    pattern = re.compile('^[a-z]+$')
    for word in nltk.corpus.words.words():
        lemma = getLemma(word, upos="NOUN")[0]
        inflections = getAllInflections(lemma, upos="NOUN")
        # Only add nouns if they have both singular and plural - excluding mass nouns
        # significantly simplifies sentence-building logic, and doesn't reduce vocabulary
        # size by all that much
        if "NN" in inflections and "NNS" in inflections:
            singular = inflections["NN"][0]
            plural = inflections["NNS"][0]
            if singular not in noun_dict and 1 < len(singular) and pattern.fullmatch(singular):
                noun_dict[singular] = (plural, p.a(singular).split()[0])

    sorted_nouns = sorted(noun_dict.keys())
    rows = [(n, *noun_dict[n]) for n in sorted_nouns]
    with open(fpath, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["singular", "plural", "article"])
        writer.writerows(rows)
    print(f"Saved {len(sorted_nouns)} nouns to {fpath}.")


def construct_adverb_list(fpath):
    adv_set = set()
    pattern = re.compile('^[a-z]+$')
    for word in nltk.corpus.words.words():
        lemma = getLemma(word, upos="ADV")[0]
        inflections = getAllInflections(lemma, upos="ADV")
        # Comparatives have no effect on the surrounding grammar, so just
        # treat them as separate words
        if "RB" in inflections:
            adv_set.add(inflections["RB"][0])
        if "RBR" in inflections:
            adv_set.add(inflections["RBR"][0])
    adv_list = sorted({
        adv for adv in adv_set if 1 < len(adv) and pattern.fullmatch(adv)
    })
    with open(fpath, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["adverb"])
        writer.writerows([(adv,) for adv in adv_list])
    print(f"Saved {len(adv_list)} adverbs to {fpath}.")


def construct_adjective_list(fpath, p):
    adj_set = set()
    pattern = re.compile('^[a-z]+$')
    for word in nltk.corpus.words.words():
        lemma = getLemma(word, upos="ADJ")[0]
        inflections = getAllInflections(lemma, upos="ADJ")
        # Comparatives have no effect on the surrounding grammar, so just
        # treat them as separate words
        if "JJ" in inflections:
            adj_set.add(inflections["JJ"][0])
        if "JJR" in inflections:
            adj_set.add(inflections["JJR"][0])
    adj_list = sorted({
        adj for adj in adj_set if 1 < len(adj) and pattern.fullmatch(adj)
    })
    articles = [p.a(adj).split()[0] for adj in adj_list]
    rows = zip(adj_list, articles)
    with open(fpath, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["adjective", "article"])
        writer.writerows(rows)
    print(f"Saved {len(adj_list)} adjectives to {fpath}.")


def construct_verb_list(fpath):
    verb_dict = {}
    pattern = re.compile('^[a-z]+$')
    for word in nltk.corpus.words.words():
        try:
            lemma = getLemma(word, upos="VERB")[0]
            inflections = getAllInflections(lemma, upos="VERB")
            verb_present = inflections["VBZ"][0]
            if not 1 < len(verb_present):
                continue
            if not pattern.fullmatch(lemma):
                continue
            verb_present_plural = inflections["VBP"][0]
            verb_past = inflections["VBD"][0]
            if verb_present not in verb_dict:
                verb_dict[verb_present] = (verb_present_plural, verb_past)
        except KeyError:
            continue
    verb_dict.pop("is")  # "Is" doesn't fit the pattern of all other verbs, and is a bad password component anyway...
    sorted_verbs = sorted(verb_dict.keys())
    rows = [(v, *verb_dict[v]) for v in sorted_verbs]
    with open(fpath, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["singular", "plural", "past"])
        writer.writerows(rows)
    print(f"Saved {len(rows)} verbs to {fpath}.")


def construct_connectives_list(fpath):
    words = ["and", "or", "with", "on", "in", "over", "to", "at", "under", "near"]
    with open(fpath, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["connective"])
        writer.writerows([(word,) for word in words])
    print(f"Saved {len(words)} connectives to {fpath}.")


def main():
    p = inflect.engine()
    data_dir = os.path.join("..", "data")
    fpath = os.path.join(data_dir, "nouns.csv")
    construct_noun_list(fpath, p)
    fpath = os.path.join(data_dir, "verbs.csv")
    construct_verb_list(fpath)
    fpath = os.path.join(data_dir, "adjectives.csv")
    construct_adjective_list(fpath, p)
    fpath = os.path.join(data_dir, "adverbs.csv")
    construct_adverb_list(fpath)
    fpath = os.path.join(data_dir, "connectives.csv")
    construct_connectives_list(fpath)


if __name__ == '__main__':
    main()

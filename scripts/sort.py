#!/usr/bin/env python3

import os

root = "../js/data"
files = ["adjectives.js", "nouns.js", "verbs.js"]


def sort_file(path):
    d = {}
    word_lines = []
    start_lines = []
    end_lines = []
    started = False
    with open(path, 'r') as f:
        for line in f.readlines():
            line = line.strip()
            if line.startswith("[\""):
                started = True
                if line.endswith(","):
                    line = line[:-1]
                word = line[2:].split("\"")[0]
                word_lines.append(line)
                d[line] = word
            elif started:
                end_lines.append(line)
            else:
                start_lines.append(line)
    # First sort alphabetically
    word_lines = sorted(word_lines, key=lambda line: d[line])
    # Then sort by length
    word_lines = sorted(word_lines, key=lambda line: len(d[line]))
    # add commas
    for i in range(len(word_lines) - 1):
        word_lines[i] += ","
    with open(path, 'w') as f:
        f.write("\n".join(start_lines) + "\n")
        f.write("\n".join(word_lines) + "\n")
        f.write("\n".join(end_lines) + "\n")


def sort_data_files():
    for fname in files:
        sort_file(os.path.join(root, fname))


if __name__ == '__main__':
    sort_data_files()

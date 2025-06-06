# Grammatical Passphrase Generator

This is a web app for generating passphrases that form grammatically correct sentences.


## FAQ

### What's a passphrase?
Passphrases are short sequences of common words that can be used as passwords. Because they are longer and more memorable than the sorts of passwords most people choose, they are generally considered to be [more secure](https://xkcd.com/936/).

### Why grammatically correct?
Sequences of words are easier to remember when they form sentences, even if those sentences are nonsensical.

### But doesn't that make them less secure?
Well, yes... but it turns out not by much. In this case, knowing that an adjective is likely to be followed by a noun only reduces the possible number of words by half, or by one bit of entropy. This is offset by having grammatical variation, such as singulars and plurals, or past or present tenses.

### Wait, what's entropy?
Entropy is a measure of the amount of information contained in a password. Each additional bit of entropy means it would take an attacker twice as long to crack your password. Based on the number of words used by this generator, passphrases with 5 words have an entropy of around 73 bits. This measure assumes that an attacker knows that you get your passwords from this page - if an attacker is using a standard dictionary attack, the entropy will be significantly higher.

### So, how does it work?
For simplicity, the passphrases all follow the same grammatical construction: noun phrase, verb, noun phrase. The noun phrases may contain adjectives and may have definite or indefinite articles, and the verb can be in either present or past tense, and may be preceded by adverbs. For sentences longer than five words, additional noun phrases are linked with conjunctions or prepositions. The words are selected at random from a list of over 32,000 nouns, adjectives, verbs, and adverbs.

### I still can't remember a million different passwords, even if they're sentences...
The best solution to this problem is to use a password manager, such as [Bitwarden](https://bitwarden.com/) or [1Password](https://1password.com/). These are apps that will remember most of your passwords for you, and automatically fill them in on websites. This page is meant for the few occasions that you can't use a password generator and actually have to remember your passwords, such as for computer logins.

The worst solution is to reuse the same password over and over again for different services. If you do this, the moment one website you use gets hacked because it has poor security, *all* of your accounts are vulnerable. **Never reuse passwords.**

### Hang on, should I really be getting my passwords from a website?
Well, ideally not. But the phrases from this site are generated locally on your computer, and are never sent to a server, so it should be safe enough. This project is open-source and published on [GitHub](https://github.com/rddunphy/PassphraseGenerator), so you can review it to make sure it does what I claim.

### I've found a bug!
Great! Let me know by opening an issue [here](https://github.com/rddunphy/PassphraseGenerator/issues) and I'll fix it.

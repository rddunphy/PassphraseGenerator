/*
 * These are a series of simple utility functions for generating random
 * outputs using window.crypto or window.msCrypto if available, which
 * unlike Math.random are cryptographically secure.
 */


/*
 * Random float in range [0; 1)
 * Based on https://stackoverflow.com/a/34577886
 */
function random() {
    var crypto = window.crypto || window.msCrypto;
    if (crypto) {
        var buffer = new ArrayBuffer(8);
        var arr = new Int8Array(buffer);
        window.crypto.getRandomValues(arr);
        // float should start with 0011 1111 1111 xxxx
        // first bit is sign, next 11 bits are exponent
        arr[7] = 0x3f;
        arr[6] |= 0xf0;
        return new DataView(buffer).getFloat64(0, true) - 1;
    } else {
        // Only if cryptographically secure generator is not available
        // (this should never happen in up-to-date browsers)
        if (!window.cryptoWarningDisplayed) {
            console.warn("window.crypto and window.msCrypto not available"
                         + " - using Math.random instead");
            // To avoid spamming the console
            window.cryptoWarningDisplayed = true;
        }
        return Math.random();
    }
}


/*
 * Random integer in range [0; max)
 */
function randomInt(max) {
    return Math.floor(random() * max);
}


/*
 * Random integer in range [min; max)
 */
function randomIntRange(min, max) {
    return Math.floor(random() * (max - min)) + min;
}


/*
 * Random float in range [min; max)
 */
function randomRange(min, max) {
    return random() * (max - min) + min;
}


/*
 * Random element from a list
 */
function randomChoice(list) {
    return list[randomInt(list.length)];
}


/*
 * n random elements from a list, without replacement
 */
function randomChoices(list, n) {
    if (n > list.length) {
        n = list.length;
    }
    if (n < 1) {
        return [];
    }
    var choices = [];
    var i;
    while (choices.length < n) {
        i = randomInt(list.length);
        choices.push(list.splice(i, 1)[0]);
    }
    return choices;
}


/*
 * Random permutation of a list
 */
function randomPermutation(list) {
    return randomChoice(list, list.length);
}


/*
 * Random boolean value
 */
function randomBool() {
    return random() < 0.5;
}

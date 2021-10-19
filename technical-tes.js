function fizzbuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return 'fizzbuzz';
    }
    if (n % 3 == 0) {
        return 'fizz';
    }
    if (n % 5 == 0) {
        return 'buzz';
    }
}

function multiplyWithoutSymbol(n1, n2) {
    let resul = 0;
    for (let i = 0; i < Math.abs(n2); i++) {
        resul += Math.abs(n1);
    }
    return resul * Math.sign(n1) * Math.sign(n2);
}

function largestNumber(arr) {
    return arr.reduce((acc, value) => Math.max(acc, value), []);
}

function cleanArray(arr) {
    return arr.reduce((acc, value) => { if (value) { acc.push(value) } return acc }, []);
}

function flatArray(arr) {
    return arr.reduce((acc, value) => acc.concat(value), []);
}

function normalized(word) {
    return word.toLowerCase().replace('.', '').replace(',', '').replace('?', ''); // TODO: change by regular expression
}

function countWords(text) {
    let dict = {};
    let words = text.split(' ');
    for (let word of words) {
        if (normalized(word) in dict) {
            ++dict[normalized(word)]
        } else {
            dict[normalized(word)] = 1;
        }
    }
    return dict;
}

function isPalindrome(text) {
    const re = /[\W_]/g;
    const lowRegStr = text.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr ? true : false;
}

module.exports = { fizzbuzz, multiplyWithoutSymbol, largestNumber, cleanArray, flatArray, countWords, isPalindrome };
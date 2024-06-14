// Your code here
function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }

    if (word === '') {
        return false; // Handle empty string case
    }

    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must contain only alphabetic characters');
    }

    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;
}

module.exports = { isPalindrome };
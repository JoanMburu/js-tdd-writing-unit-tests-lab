// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
    test('returns true for a palindrome word', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('returns false for a non-palindrome word', () => {
        expect(isPalindrome('car')).toBe(false);
    });

    test('returns true for palindrome word with mixed case', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('returns false for an empty string', () => {
        expect(isPalindrome('')).toBe(false);
    });

    test('throws an error for non-alphabetic characters', () => {
        expect(() => isPalindrome('racecar1')).toThrow();
    });

    test('throws an error for non-string input', () => {
        expect(() => isPalindrome(123)).toThrow();
    });
});

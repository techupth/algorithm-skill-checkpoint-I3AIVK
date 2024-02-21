// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const palindromeTest = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return palindromeTest === palindromeTest.split("").reverse().join("");
};

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));

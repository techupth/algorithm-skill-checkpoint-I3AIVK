// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const charFreq = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-zA-Z0-9]/)) {
      if (charFreq[char]) {
        charFreq[char]++;
      } else {
        charFreq[char] = 1;
      }
    }
  }

  for (let char in charFreq) {
    if (charFreq[char] > maxCount) {
      maxCount = charFreq[char];
      console.log(charFreq[char]);
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
};

console.log(getMaxCharacters("abcccccccd")); // Output: "c"
console.log(getMaxCharacters("apple 1231111")); // Output: "1"

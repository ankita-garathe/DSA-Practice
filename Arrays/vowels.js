function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let ch of str.toLowerCase()) { // Step 2
    if (vowels.includes(ch)) {        // Step 2.1
      count++;                        // Step 2.2
    }
  }

  return count; // Step 3
}

// Example:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript"));  // Output: 3
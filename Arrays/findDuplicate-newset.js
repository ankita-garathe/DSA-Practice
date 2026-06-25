
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 2, 3, 4, 3, 5, 5])); 
// Output: [2, 3, 5]

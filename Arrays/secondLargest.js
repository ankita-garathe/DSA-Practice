function secondLargest(arr) {
    arr.sort((a, b) => b - a);

    return arr[1];
}

console.log(secondLargest([10, 5, 20, 8, 15]));
// 15

===

Question	Brute Force	Optimal Pattern	Optimal TC	Optimal SC
Second Largest	Sorting	Array Traversal	O(n)	O(1)

function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 5, 20, 8, 15]));
// 15
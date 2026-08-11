//Move Zeroes



function moveZeroes(arr) {
    let left = 0;

    for (let right = 0; right < arr.length; right++) {

        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }

    return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]


//Optimal Approach — Two Pointer ⭐

//Dry Run
/* [0, 1, 0, 3, 12]

right = 0 → 0 → skip

right = 1 → 1
swap → [1, 0, 0, 3, 12]

right = 2 → 0 → skip

right = 3 → 3
swap → [1, 3, 0, 0, 12]

right = 4 → 12
swap → [1, 3, 12, 0, 0] */
//Binary Search == Brute Force — Linear Search

function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(search([1, 3, 5, 7, 9, 11], 7));
// 3

//TC: O(n)
//SC: O(1)

//Pattern: Linear Search
function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

const numbers = [10, 5, 25, 8, 15];

console.log(findLargest(numbers));


//Pattern: Linear Traversal

//TC: O(n)
//SC: O(1)
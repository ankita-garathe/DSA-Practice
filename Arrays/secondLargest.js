function secondLargest(arr) {
    arr.sort((a, b) => b - a);

    return arr[1];
}

console.log(secondLargest([10, 5, 20, 8, 15]));
// 15
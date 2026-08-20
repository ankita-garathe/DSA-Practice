//Optimal Approach — Stack

function isValid(s) {
    let stack = [];

    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {

        // Opening bracket
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }

        // Closing bracket
        else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true


TC: O(n)
SC: O(n)
Pattern: Stack




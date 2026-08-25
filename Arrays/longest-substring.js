//Longest Substring Without Repeating Characters
//Brute Force Approach

function longestSubstring(str) {
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        let set = new Set();

        for (let j = i; j < str.length; j++) {

            if (set.has(str[j])) {
                break;
            }

            set.add(str[j]);

            maxLength = Math.max(maxLength, set.size);
        }
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));
// 3
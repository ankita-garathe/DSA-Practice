function isAnagram(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let str1 = s.split("").sort().join("");
    let str2 = t.split("").sort().join("");

    return str1 === str2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false


//Time Complexity: O(n log n)
//Space Complexity: O(n)
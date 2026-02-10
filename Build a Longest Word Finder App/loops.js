function findLongestWordLength(str) {
    const words = str.split(" ");
    let maxLength = 0;

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Googling do a barrel roll"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); 
function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();

    for (let char of second) {
        if (!first.includes(char)) {
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["Noel", "Ole"]));  
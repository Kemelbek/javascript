function findLetter(str,
    let) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (let === str[i]) {
            count++;
        }
    }
    return count;
}
console.log(findLetter("johno", "j"))
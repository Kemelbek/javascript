function myRange(x, y) {
    var arr = [];
    for (var i = x + 1; i < y; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(myRange(2, 10));
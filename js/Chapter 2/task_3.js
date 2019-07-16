function findFactorial(num) {
    var count = 1;
    if (num < 0) {
        return "Wrong input";
    }
    for (var i = 1; i <= num; i++) {
        count *= i;
    }
    return count;
}

console.log(findFactorial(-1));
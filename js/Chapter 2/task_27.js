function createBase(n) {
    return addSix = function (num) {
        return (num + n);
    };
}
// createBase.prototype.n = n;

var addSix = createBase(6);

// createBase(6);
console.log(addSix(10)); // returns 16
// addSi(21); // returns 27
// console.log(addSix);
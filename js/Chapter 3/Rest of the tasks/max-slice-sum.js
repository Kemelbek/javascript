let A = [3, 2, -6, 4, 0];
var resA = [];
for (let i = 0; i < A.length; i++) {
    var empA = [A[i]];
    sum = A[i];
    for (let j = i + 1; j < A.length; j++) {
        empA.push(sum += A[j]);
    }
    console.log(empA);
    empA.sort((a, b) => a - b);
    resA.push((empA[empA.length - 1]));
    resA.sort((a, b) => a - b);
    if (resA[i] === undefined) {
        resA.splice(i, 1);
    }
}
console.log(resA);
console.log(resA[resA.length - 1]);
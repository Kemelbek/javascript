function fib(num) {
    var i =0;
    var arr = [0,1];
    arr.push(arr[i-1]+arr[i]);

    if (i == num) {
        console.log(arr);
        return;
    }
    i++;
    return fib();
}

console.log(fib(10));
function fib(n){
    if(n<2){
        console.log(n);
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(6)); 
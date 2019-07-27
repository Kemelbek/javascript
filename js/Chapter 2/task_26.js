function test() {
    console.log(a); 
    // It calls a variable which was not defined yet.
    console.log(foo());
    // it calls a function, and functions are seen everywhere.
    var a = 1;

    function foo() {
        return 2;
    }
}
test();
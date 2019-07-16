
function isPalindrome(entStr){
    var newStr = reverse(entStr);
    function reverse(param) { 
        return param.split("").reverse().join("");
        
    }
    if (entStr == newStr){
        boo = true;
    } else (boo = false);
    
    return console.log(boo);
}
isPalindrome("madsam");
function isBalanced(s) {
    // var arrOfBrack = ["()","[]","{}"];
    var arrOfStr = s.split("");
    var result;
    // for (var i = 0; i<s.length;i++){
    for (var j = s.length - 1; j >= 0; j--) {
        // console.log(arrOfStr);
        switch (arrOfStr[0] + arrOfStr[j]) {
            case '()':
            case '{}':
            case '[]':
                arrOfStr.pop();
                arrOfStr.shift();
                // j++;
                break;
            default:
            // return console.log("NO");
        }
    }
    if (!arrOfStr || !arrOfStr.length) {
        return "YES";
    } else return "NO";
}
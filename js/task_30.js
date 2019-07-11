function isBalanced(s) {
    // var arrOfBrack = ["()","[]","{}"];
    var arrOfStr = s.split("");
        var result;
    // for (var i = 0; i<s.length;i++){
        for (j = 0; j<s.length;j++){
            // console.log(arrOfStr);
            switch (arrOfStr[j]+arrOfStr[j+1]) {
                case '()':  
                case '{}':
                case '[]':
                    arrOfStr.splice(j,2);
                    // arrOfStr.splice(j+1,1);
                    j-=2;
                    break;
                default:
                    // return console.log("NO");
            }
        }
        // if(!arrOfStr || !arrOfStr.length)
        if(arrOfStr.length==0){
            return console.log("YES");
        } else return console.log("NO");
    // }
}

isBalanced("{(([])[])[]}");
isBalanced("{(([])[])[]]}");
isBalanced("{{[[(())]]}}");
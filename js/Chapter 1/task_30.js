function isBalanced(s) {
    var arrOfStr = s.split("");
        var result;
        for (j = 0; j<s.length;j++){
            // console.log(arrOfStr);
            switch (arrOfStr[j]+arrOfStr[j+1]) {
                case '()':  
                case '{}':
                case '[]':
                    arrOfStr.splice(j,2);
                    j-=2;
                    break;
                default:
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

function numRev(inpNum){
    var revNum = inpNum.toString().split("").reverse().join("");
    var res = parseInt(revNum,10);
return console.log(res);
}

numRev(54213);
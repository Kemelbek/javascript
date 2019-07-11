function findFirstChar(str){
var arrOfStr = str.split("");

for(var k = 0;k<str.length;k++){
    var arrLen = arrOfStr.length;
    for(var j = 1; j<str.length;j++){
        if(arrOfStr[0]==arrOfStr[j]){
                arrOfStr.splice(j,1);
                j--;
        }
    }
    if( arrOfStr.length<arrLen){
        arrOfStr.shift();
        console.log(arrOfStr);
    }
}
return console.log(arrOfStr[0]);
}
findFirstChar("abacddbedc");
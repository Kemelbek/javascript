function firCharUp(str){
var arrOfStr = str.split(" ");

for (var i =0;i<arrOfStr.length;i++){
    arrOfStr[i]=arrOfStr[i].charAt(0).toUpperCase()+arrOfStr[i].slice(1);
}
var newStr = arrOfStr.join(" ");
return console.log(newStr);
}
firCharUp('the quick brown fox');
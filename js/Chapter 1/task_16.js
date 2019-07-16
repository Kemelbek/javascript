var entStepNum = +prompt("Enter number of steps");
var entDownOrUp = prompt("Enter his route")

var arrOfChars = entDownOrUp.split("");

var num = 0;
var valNum = 0;
var numArr = [];

for (var i = 0; i< entStepNum; i++){
   
     if (arrOfChars[i] == "D"){
        num--;
        numArr.push(num);
    } else if (arrOfChars[i] == "U"){
        num++;
        numArr.push(num);
    } if(num==0 && numArr[i-1]<0){
        valNum++;
    }
}

console.log(arrOfChars, numArr);
console.log(num, valNum);
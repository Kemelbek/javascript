var entNum = +prompt("Enter number of array");
var entRotNum = +prompt("Enter number of rotations");

var arrNum = [];
for (var i =0; i<entNum; i++){
    arrNum.push(+prompt("Enter numbers"));
}


for (var j = 0;j<entRotNum;j++){
    var tempVar = arrNum.shift(); 
    arrNum.push(tempVar);
}


console.log(arrNum);
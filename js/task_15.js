var storeArr = [];

for (i=1;i<6;i++){
    var enterNum = +prompt("Enter the number" + i);
    storeArr.push(enterNum);
}

storeArr.sort((a,b)=>a-b);
var minSum = 0;
var maxSum = 0;

for (i=0;i<4;i++){
    minSum+=storeArr[i];
    maxSum+=storeArr[i+1];
}
console.log(storeArr);
console.log(maxSum,minSum);
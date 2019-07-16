var firArr = [1,0,2,3,4];
var secArr = [3,5,6,7,8,13];
var resArr = [];
var max = 0;

greaterNum = Math.abs(firArr.length-secArr.length);
for (var i =0;i<greaterNum;i++){
    if (firArr.length>=secArr.length){
        max = firArr.length;
        secArr.push(0);
    } else {
        max = secArr.length;
        firArr.push(0);
    }
}

for (var i =0; i<max;i++){
    resArr.push(firArr[i]+secArr[i]);
}

console.log(resArr);

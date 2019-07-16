var arr0 = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

var arr1 = [
    [6,7,2],
    [1,5,9],
    [8,3,4]
];

var arr2 = [
    [4,9,2],
    [3,5,7],
    [8,1,6]   
];

var arr3 = [
    [2,9,4],
    [7,5,3],
    [6,1,8]   
];

var arr4 = [
    [8,3,4],
    [1,5,9],
    [6,7,2]   
];
var arr5 = [
    [4,3,8],
    [9,5,1],
    [2,7,6] 
];

var arr6 = [
    [6,1,8],
    [7,5,3],
    [2,9,4]   
];

var arr7 = [
    [8,1,6],
    [3,5,7],
    [4,9,2]   
];


var arrSample = [
    [4,5,8],
    [2,5,1],
    [1,9,7]   
];

var sum =0;
var sum1 =0;
var sum2 = 0;
var sum3 =0;
var sum4 =0;
var sum5=0;
var sum6=0;
var sum7=0;

for (var i =0;i<3;i++){
    for (var j = 0; j<3;j++){
        sum+=Math.abs(arr0[i][j]-arrSample[i][j]);
        sum1+=Math.abs(arr1[i][j]-arrSample[i][j]);
        sum2+=Math.abs(arr2[i][j]-arrSample[i][j]);
        sum3+=Math.abs(arr3[i][j]-arrSample[i][j]);
        sum4+=Math.abs(arr4[i][j]-arrSample[i][j]);
        sum5+=Math.abs(arr5[i][j]-arrSample[i][j]);
        sum6+=Math.abs(arr6[i][j]-arrSample[i][j]);
        sum7+=Math.abs(arr7[i][j]-arrSample[i][j]);
    }
}

var sumArr = [sum,sum1,sum2,sum3,sum4,sum5,sum6,sum7];
console.log(sumArr); 
sumArr.sort((a,b)=>a-b);

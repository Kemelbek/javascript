function findNum(arrNum){
    arrNum.sort((a,b) =>a-b);
    return console.log(arrNum[1], arrNum[arrNum.length-2]);
}
findNum([1,2,3,4,5]);
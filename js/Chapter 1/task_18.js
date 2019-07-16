var entNumOfStr = +prompt("Enter the number of strings");
var arrOfDel = [];

for (var i =0;i<entNumOfStr;i++){
    var entStr = prompt("Enter String");
    var strLen = entStr.length;
    var charStore = [];
    var numOfDel = 0; 
    
    for (var j =0; j<strLen;j++){
        charStore=entStr.split("");
        
        if( charStore[j]==charStore[j-1]){
            charStore.splice(j,1);
            numOfDel++;
        }
    }
    console.log(charStore);
    console.log(numOfDel);
    arrOfDel.push(numOfDel);
   
}

console.log(arrOfDel);

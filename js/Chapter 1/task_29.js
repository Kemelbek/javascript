function findFirstChar(str){
var arrOfStr = str.split("");
var result = "";
var counter =0;

for (var i = 0; i<str.length;i++){
    counter =0;
    for(var j = 0; j<str.length;j++){
        if(arrOfStr[i]==arrOfStr[j]){
            counter+=1;
        }
    }

    if(counter<2){
        result=arrOfStr[i];
        break;
    }
}
return result;   
}
console.log(findFirstChar("abacddbec"));
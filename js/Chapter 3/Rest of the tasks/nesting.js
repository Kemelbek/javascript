let S = "(()(())()))    ";
let arr = S.split("");
for (let i = 0;i<arr.length;i++){
    switch(arr[i]+arr[i+1]){
        case "()":
            arr.splice(i,2);
            i-=2;
            break;
        default:
            break;
    }
}
if (arr.length==0){
    console.log(1);
} else console.log(0);
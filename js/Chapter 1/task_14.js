var str_enter = "dog";
// var arr_of_str = str_enter.split("");
var arr_of_chunks = [];
for (i=0; i<str_enter.length;i++){
    for (j=i+1;j<str_enter.length+1;j++){
        arr_of_chunks.push(str_enter.slice(i,j))
    }
}

console.log(arr_of_chunks)
var str_enter = prompt("Enter a noun");
var arr_of_str = str_enter.split("");
var arr_of_chunks = [];
// for (i=0; i<arr_of_str.length-1;i++){
    for (j=0;j<arr_of_str.length;j++){
        arr_of_chunks.push(arr_of_chunks.join(arr_of_str[j]))
    }
// }

alert(arr_of_chunks)
// var arr = [8,2,4,3,5,2,6,4,5];
// var arr = [1,2,3,4,2,3,6,5,2]
var arr = [2, 1, 3, 4, 5, 5, 4, 5, 4, 3, 1, 2]


// for (var i = 1;i<arr.length;i++){
//     if (arr[i] < arr[i-1]){
//         pust[i-1]+=1;
//     // } else if (arr[i]> arr[i-1]){
//     //     pust[i]+=1;
//     } 
// } 



// function compare(i){
//     if (i>(arr[arr.indexOf(i)-1])){

//     }
// }
var pust = [1];
for (var i = 1; i < arr.length; i++) {
    var counter = 1;


    if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
        counter += pust[i - 1];
        pust.push(counter);
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        counter += pust[i - 1];
        pust.push(counter);
    } else if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
        counter++;
        pust.push(counter);
    } else if (arr[i] > arr[i - 1] && arr[i] == arr[i + 1]) {
        counter += pust[i - 1];
        pust.push(counter);
    } else if (arr[i] < arr[i - 1] && arr[i] == arr[i + 1]) {
        pust.push(counter);
    } else if (arr[i] == arr[i - 1] && arr[i] > arr[i + 1]) {
        counter++;
        pust.push(counter);
    } else if (arr[i] == arr[i - 1] && arr[i] < arr[i + 1]) {
        pust.push(counter);
    } else pust.push(counter);
    if (i == arr.length - 1) {
        pust.pop();
        if (arr[i] > arr[i - 1]) {
            counter += pust[pust.length - 1];
            pust.push(counter);
        } else pust.push(counter);
        pust.shift();
        if (arr[0] > arr[1]) {
            pust.unshift(2);
        } else pust.unshift(1);
    }
}
const arrSum = pust.reduce((a, b) => a + b, 0);
console.log(pust, arrSum);
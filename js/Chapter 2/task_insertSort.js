var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

// function insertionSort1(n, arr) {
//     for (var i = n - 2; i >= 0; i--) {
//         if (temp !== null && temp < arr[i + 1]) {
//             arr.splice(i + 1, 1, arr[i]);
//             // if (i == 0) {
//             //     arr.splice(i, 1, temp);
//             //     console.log(arr.join(" "));
//             //     break;
//             // }
//         }
//         if (temp !== null && temp > arr[i + 1]) {
//             arr.splice(i, 1, temp);
//             temp = null;
//             console.log(arr.join(" "));
//             break;
//         }
//         if (arr[i] > arr[i + 1]) {
//             var temp = arr[i + 1];
//             arr.splice(i + 1, 1, arr[i]);
//         }
//         console.log(arr.join(" "));
//     }
// }

function insertionSort1(n, arr) {
    for (var i = n - 1; i >= 0; i--) {
        if (temp !== null && temp < arr[i - 1] || temp <arr[0]) {
            arr.splice(i, 1, arr[i - 1]);
            if (i == 0) {
                arr.splice(i, 1, temp);
                console.log(arr.join(" "));
                break;
            }
        }
        if (temp !== null && temp > arr[i - 1]) {
            arr.splice(i, 1, temp);
            temp = null;
            console.log(arr.join(" "));
                break;
            }
            if (arr[i] < arr[i - 1]) {
                var temp = arr[i];
                arr.splice(i, 1, arr[i - 1]);
            }
            console.log(arr.join(" "));
        }
    }
    console.log(insertionSort1(10, arr));
    
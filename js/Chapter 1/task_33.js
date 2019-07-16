var A = [4,3,2,1,5,5,6,2,3,4];
var B = [0,1,0,1,0,1,1,0,0,1];

// var AA=A.join();
// var BB=B.join();
// for (var i =0;i<AA.length-1;i++){
//     console.log(BB[i],AA[i]);
//     if (BB.charAt(i)==1 && BB.charAt(i+1)==0){
//         if(A[i]>A[i+1]){
//             AA.replace(i+1);
//             BB.replace(i+1);
//             i-=2;
//         }   else {
//             AA.replace(i,1);
//             BB.replace(i,1);
//             i-=2;
//         }
//     } else continue;
// }






// for (var i =0;i<A.length-1;i++){
//     if (B[i]==1 && B[i+1]==0){
//         if(A[i]>A[i+1]){
//             A.splice(i+1,1);
//             B.splice(i+1,1);
//             i-=2;
//         }   else {
//             A.splice( i,1);
//             B.splice(i,1);
//             i-=2;
//         }
//     } else continue;
// }
// console.log(A)
// B.forEach(function(el,i){
//     console.log(B[i],A[i]);
//     if (el==1 && B[i+1]==0){
//         if(A[i]>A[i+1]){
//             A.splice(i+1,1);
//             B.splice(i+1,1);
//               i-=2;
//         }
//         else {
//             A.splice(i,1);
//             B.splice(i,1);
//             i-=2;
//             }
//         }
//     }
// );
// console.log(A.length,B.length);
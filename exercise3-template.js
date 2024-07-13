/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

// function sumArray(arr, int) {
//     // your code here
//   let loop = arr.length/2
//   //console.log(loop);
//   let arrfinal = [];
//   if (arr.length %2 == 0) {
//     //console.log("1");
//     for (let i = 0; i < loop; i++) {
//       if (arr.includes(int - arr[0]) == true) {
//         arrfinal[i] = [];
//         for (let j = 0; j<2; j++) {
//           if (j == 0) {
//             arrfinal[i][j] = arr[0];
//             let index = arr.indexOf(int - arr[0]);
//             arr.splice(0,1,arr[index]);
//             //console.log(arr);
//             arr.splice(index,1);
//           } else {
//             arrfinal[i][j] = arr[0];
//             arr.splice(0,1);
//             //console.log(arr);
//           }  
//         }
//         //arr.splice(0,1);
//       } else {
//         return arrfinal;
//       }
//     }
//   }
//   return arrfinal;
// } 

function sumArray(arr, int) {
  let arrfinal = [];
  for (let i = 0; i < arr.length; i++) {
      //arrfinal[i] = [];
      //let num = arr[i];
      //console.log(arrfinal);
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == int ) {
        arrfinal.push([arr[i],arr[j]]);
        j += j+1;
        //indexstore.push(n);
      }
    }
  }
  return arrfinal;
}

// Test Cases
  console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
  console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
  console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
  console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
  console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
  console.log(sumArray([2, 2, 2, 2], 4));

// var array_2D = [];
// for (var i=0; i<3; i++) {
//   array_2D[i] = [];
//   for (var j=0; j<2; j++) {
//     array_2D[i][j] = i*j;
//   }
// }

// console.log(array_2D);

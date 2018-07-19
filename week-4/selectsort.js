// selectsort tanpa menggunakan sort

// function selectsort (arr) {
//   console.log(arr);
//   var answer = [];
//   var tempnum1 = 0;
//   var count = 0;
//   for (var j = 0; j < arr.length; j++){ // berapa kali looping
//   var tempnum = arr[j]
//     for (var i = 0; i < arr.length; i ++){ // look inside the loop for the smallest number and print it;
//       if (arr[i]<tempnum && arr[i]>tempnum1){
//         tempnum = arr[i];
//         answer.push(tempnum);
//       }
//       else if ( arr[i] === tempnum){
//
//       }
//
//     }
//
//
//     tempnum1 = tempnum;
//   }
//   return answer ;
// }



function selectsort (arr) {
  console.log(arr);
  for (var j = 0; j < arr.length; j++){
    var tempnum = arr[j];
    var idx = j;
    for (var i = j+1; i < arr.length; i++){
      if (arr[i] < tempnum){
        tempnum = arr[i];
        idx = i;
      }

    }
    var tempnum1 = arr[j];
    arr[j] = tempnum;
    arr[idx] = tempnum1;
  }
  return arr ;
}

console.log(selectsort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));

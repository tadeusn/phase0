// bubblesort tanpa menggunakan sort

function bubblesort (arr) {
  // var answer = [];
  // var tempnum = 0;
  console.log (arr);
  for (var j = 0; j < arr.length; j++){
    for (var i = 0 ; i < arr.length -1; i++){
      if (arr[i+1] < arr[i]){
        var a = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = a;
      }
    }
  }
  return arr ;
}

console.log(bubblesort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));

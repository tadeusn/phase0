/*Logic Challenge: Deep Sum
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

Contoh array:

[
  [ // i = 0
    [1, 2, 3], //j = 1
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]
Maka akan menghasilkan output: 22

Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ],  --> statik arr [j][k][l]; j = dynamic, k = dynnamic, l = dynamic
jika yang diberikan adalah array kosong maka kembalikan nilai 'No number' // if ()
*/

function deepSum (arr) {
  var hitung = 0;
  if (arr.length < 1 && arr[0] === undefined  ) {  // to return no number: arr.length <1 && arr[0] === undefined
    return 'No number';
  }
  for (var j = 0; j < arr.length ; j ++){
    for (var k = 0; k < arr[j].length; k ++){ // remember the array length!
      for (var l = 0; l < arr[j][k].length; l++){
        hitung += arr[j][k][l];
  }}}
  return hitung;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number

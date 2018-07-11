// Logic Challenge - Mengelompokkan Angka
// Problem
// Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka.
// Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
//
// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// Code
console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 14: LOGIC CHALLENGE: MENGELOMPOKKAN ANGKA');
console.log('-------------------------------------------------------------------');
console.log('');

function mengelompokkanAngka(arr) {
  var thirds = [];
  var even = [];
  var odd = [];
  var multid = [];
  for (var i = 0; i < arr.length; i++){
    if ( arr[i] % 3 === 0){
      thirds.push(arr[i]); // !! this is how you push arrays to the back1
    } else if ( arr[i] % 3 !== 0){
        if ( arr[i] % 2 === 0){
          even.push(arr[i]);
      } else if ( arr[i] % 2 !== 0 ){
          odd.push(arr[i]);
      } else {
        console.log('error');
      }
    } else {
      console.log('error');
    }
  }
  // console.log(thirds);
  // console.log(even);
  // console.log(odd);
  // now to put the arrays into one multidimensional array
  multid[0] = even;
  multid[1] = odd;
  multid[2] = thirds;
  return multid;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log('');
console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 14: MENGELOMPOKKAN ANGKA: SELESAI. YAY! -TADEUS');
console.log('-------------------------------------------------------------------');

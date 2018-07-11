// Problem
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// Code
function targetTerdekat(arr) {
  // you can only write your code here!
  if (arr.includes('x') === false || arr.includes('o') === false) {
    return 0;
  }
  var a = 0;
  var distance = arr.length;
  var o = arr.indexOf('o'); //will find the position of the first found index of said value only
  for ( var i = 0; i < arr.length; i++ ){
    if (arr[i] === 'x'){
      a = Math.abs(i - arr.indexOf('o'));
      if (a < distance){
        distance = a;
      }
    }

  }
  return distance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


//look in array, if x  not present return 0; //console.log(array1.includes(2)); // expected output: true
//look in array -- find index of 'o'
//repeat check array for x, get the index, and substract from 'o', store to temporary var  a
//the smaller value is stored to  var b (initial) = arr.length; making b the compared value;
//... when smallest b is found, return b;

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");

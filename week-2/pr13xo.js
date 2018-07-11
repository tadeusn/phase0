console.log('EXERCISE 13. X dan O');
console.log('--------------------');
// Logic Challenge - X dan O
// Problem
// Diberikan sebuah function xo(str)
// yang menerima satu parameter berupa string.
// Function akan me-return true
//   jika jumlah karakter x sama dengan jumlah karakter o,
//   dan false jika tidak.
// HINT: WHEN USING SWITCH PLEASE REMEMBER TO 'BREAK;''
// Code
function xo(str) {
  // you can only write your code here!
  var c = 0;
  var d = 0;
  for (var i = 0; i < str.length; i++){
    switch (str[i]){
      case 'x':
        c = c + 1;
        break;
      case 'o':
        d = d + 1;
        break;
    }
  }
  if ( c === d ){
    return true;
  } else if ( c !== d ){
    return false;
  } else {
    return 'error';
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

console.log('-------------------------');
console.log('EXERCISE 13 SELESAI. YAY!');
console.log('-------------------------');

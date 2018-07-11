// Logic Challenge - Palindrome
// Problem
// Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
// Contoh, 'katak' dibalik tetaplah 'katak'.
// Code
function palindrome(kata) {
  // you can only write your code here!
  var kata1 ='';
  for (var i = kata.length - 1; i >=0 ; i--){
    kata1=kata1+kata[i]
  }
  if (kata === kata1){
    return true;
  } else if (kata !== kata1){
    return false;
  } else {
    console.log('error');
    return;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

/* shorter version =
function palindrome(str) {
  var re = /[\W_]/g;
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
*/

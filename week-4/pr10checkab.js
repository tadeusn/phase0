/*Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika:
    di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
    Jika tidak ditemukan sama sekali, kembalikan nilai false.
Code */

// observation: "ane b" = 3 ; index a = 0, index b = 4; hence i < length -4;

function checkAB(num) {
  var str = num.toLowerCase(); // change to lower case assign to str
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // erase tanda baca

  for (var i = 0; i<str.length-4; i++){
    if (str[i] === 'a'){
      if (str[i+4] === 'b'){
        return true;
      }
    }
    else if (str[i] === 'b'){  //the other case has to be made that if b is found first!
      if (str[i+4] === 'a') {
        return true;
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

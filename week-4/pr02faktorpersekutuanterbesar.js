// Problem
// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
// Code
function fpb(angka1, angka2) {
  var batas = Math.min(angka1, angka2);
  for (var i = 1; i < batas; i++){
    if ( angka1 % i === 0 && angka2 % i === 0){
      var result = i;
    }
  }
  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1


//Math.min() and Math.max()
//Math.min(0, 150, 30, 20, -8, -200);  // returns -200
// Math.max(0, 150, 30, 20, -8, -200);  // returns 150

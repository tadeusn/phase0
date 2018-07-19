// Problem
// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
// Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka
// dari digit paling depan ke paling belakang.
// Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.
//
// Contoh:
// 512 --> outputnya = 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

function totalDigitRekursif(angka) {
  var numstr = angka.toString();

  if (numstr.length < 1) {
    return 0;
  }

  var a = Number(numstr.slice(0,1)) // this is to get the first digit;
  numstr = numstr.slice(1); // this is to reduce the 'string' minus first digit
  return a + totalDigitRekursif(numstr); // this is the loop;

}

//Math.floor(x) = rounded down to nearest interger

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

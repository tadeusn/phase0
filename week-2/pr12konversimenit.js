console.log('EXERCISE 12. KONVERSI MENIT');
console.log('');

// Problem
// Diberikan sebuah function konversiMenit(menit)
// yang menerima satu parameter berupa angka
// yang merupakan ukuran waktu dalam menit.
// Function akan me-return string waktu dalam format jam:menit
// berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
// Hint
// Math.trunc(x)
// Mengembalikan angka integer dengan menghilangkan angka dibelakang koma.
// var truncated = Math.trunc(Math.PI) // truncated = 3
// also, REMEMBER LOGIC IF === NOT JUST =!
// Code
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = 0;
  var sisamenit = 0;
  var jammenit = ''
  jam = Math.trunc(menit/60);
  sisamenit = menit - (jam * 60);
  var tolong = sisamenit.toString();
  if (tolong.length === 2){
    return jammenit.concat(jam + ':' + sisamenit);
  } else if (tolong.length === 1){
    tolong = '0'.concat(tolong);
    return jammenit.concat(jam + ':' + tolong);
  } else {
    return 'error';
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log('');
console.log('EXERCISE 12 SELESAI. YAY!');

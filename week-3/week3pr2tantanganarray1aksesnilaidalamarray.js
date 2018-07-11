// Mengakses Nilai Dalam Array
// Tahukah kamu jika string adalah sebuah array?
// Kamu dapat mengakses karakter-karakter pada sebuah string layaknya
// mengakses nilai pada sebuah array.
// Untuk membuktikannya, kerjakanlah tantangan ini!
// Objectives
// Mengetahui properties Pada Array
// Mengerti Cara Mengakses Nilai Dalam Array
// Directions
// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//
// Example
// //input "hello world!"
// //output
// "!dlrow olleh"
// Hints
// Untuk membantumu mengerjakan tantangan ini,
// gunakanlah properti length pada sebuah array yang akan
// memberikan panjang dari array-nya.
// Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini,
// kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!

console.log('-----------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 2: TANTANGAN ARRAY 1: MENGAKSES NILAI DALAM ARRAY');
console.log('-----------------------------------------------------------------');
console.log('');

function balikString(isian){
  console.log('INPUT TEXT= ' +isian);
  var jawaban= '';
  var j = 0;
  for (var i = isian.length - 1; i >= 0; i --){
    jawaban = jawaban + isian[i];
  }
  console.log('OUTPUT TEXT= ' +jawaban);
}

balikString('hello world!'); //input test text here

console.log('');
console.log('-----------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 2: TANTANGAN ARRAY 1: SELESAI');
console.log('-----------------------------------------------------------------');

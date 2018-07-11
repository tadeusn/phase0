console.log('EXERCISE 7. PERULANGAN - PLAY WITH ASTERISKS.');
console.log('SOAL #1.');



console.log('');
console.log('SOAL #1.');
// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping
// dalam JavaScript untuk menampilkan di console barisan
// asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
// Output
// jika rows1 = 5
// *
// *
// *
// *
// *
// Skeleton Code
var rows1 = 7; // input the number of rows
// do loops to display asterisks in the console.
console.log('current value of var rows1 = '+rows1);
for (var i = 1; i <= rows1 ; i++){
  console.log('*');
}

console.log('');
console.log('SOAL #2.');
// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk
// menampilkan di console barisan asterisks (bintang). Setiap baris memiliki
// jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau
// loop di dalam loop untuk menyelesaikan kasus ini.
// Output
// jika rows2 = 5
// *****
// *****
// *****
// *****
// *****
// Skeleton Code
var rows2 = 7; // input the number of rows
// do loops to display asterisks in the console.
var string2 = '*';
console.log('current value of var rows2 = '+rows2);
for (i = 1; i <= rows2; i++) {
  for (var p = 1; p < rows2; p++){
    string2=string2.concat('*');
  }
  console.log(string2);
  string2='*';
}

console.log('');
console.log('SOAL #3.');
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk
// menampilkan di console barisan asterisks (bintang) dalam bentuk tangga.
// Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris.
// Baris pertama, hanya ada satu bintang.
// Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya.
// Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
// Output
// jika rows3 = 5
// *
// **
// ***
// ****
// *****
// Skeleton Code
var rows3 = 7; // input the number of rows
// do loops to display asterisks in the console.
var string3 = '';
console.log('current value of var rows3 = '+rows3);
for (i = 1; i <= rows3; i++) {
  for (p = 1; p <= i; p++){
    string3=string3.concat('*');
  }
  console.log(string3);
  string3 = '';
}

console.log('');
console.log('EXERCISE 7 SELESAI. YAYY');

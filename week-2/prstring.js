console.log('Exercise 5 Week 2.');
// String
// Soal latihan string ini memiliki 4 nomor. Simpan di 1 file yang sama!
//
// 1. Let's Form a Sentence
// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan
// simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan
// nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan
// spasi di setiap kata, dan tampilkan di console hasil penggabungannya!
// Kamu tidak perlu membuat variable baru!
//Output
// JavaScript is awesome and I love it!
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log('SOAL NOMOR 1.');
console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);
console.log ('');

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan
// setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter
// dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa,
//  kita coba ini dulu untuk saat ini.
// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal
// menggunakan simbol + untuk membentuk kata tersebut!
// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool
console.log('SOAL NOMOR 2.');

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[11] + word[16]; // do your own!
var fourthWord= word[16] + word[1]; // do your own!
var fifthWord = word[9] + word[1] + word[1] + word[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log ('');

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil
// potongan dari tiap kata!
// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool
console.log('SOAL NOMOR 3.');

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14); // do your own!
var thirdWord3 = word.substring(15, 17); // do your own!
var fourthWord3 = word.substring(18, 20); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3); // had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Second Word: ' + secondWord3); // had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Third Word: ' + thirdWord3);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Fourth Word: ' + fourthWord3);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Fifth Word: ' + fifthWord3);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log ('');

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
// Skeleton Code
// Buatlah variable-variable baru untuk menyimpan panjang string,
// dan ubah console dibawah untuk menampilkan nya.
// Output
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4
console.log('SOAL NOMOR 4.');

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14); // do your own!
var thirdWord4 = word.substring(15, 17); // do your own!
var fourthWord4 = word.substring(18, 20); // do your own!
var fifthWord4 = word.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);// had to change the var of the skeleton code becsuse sebelumnya it refers to the wrong variable yaitu variable soal#2

console.log ('');
console.log ('END OF HOME-WORK. Yay.');

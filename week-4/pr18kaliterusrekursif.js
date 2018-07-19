// Problem
// Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka.
// Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian.
// Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit.
// Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.
//
// Contoh:
// 3 => 3, karena sudah satu digit
// 24 => 8, Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8.
// 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120.
//   120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.

// --- jawaban pertama ---- yg asli tanpa looping tapi pakai dua function.
// function kaliTerusRekursif1(angka) {
//   var numstr = angka.toString();
//   if (numstr.length < 1){
//     return 1; // 1 because if 0 then everybody gets 0-ed;
//   }
//   var a = Number (numstr.slice(0,1));
//   numstr = numstr.slice(1); // from element index 1 to end of index length;
//   console.log ('a = '+a+', numstr = '+numstr);
//   return a * kaliTerusRekursif1(numstr);
// }
//
// function kaliTerusRekursif(angka) {
//   var numstr = angka.toString();
//   console.log('kembali ke main');
//   if (numstr.length > 1){
//     angka = kaliTerusRekursif1(angka);
//     return kaliTerusRekursif(angka);
//   }
//   return angka;
// }


// --- jawaban ke-dua ---- function ( a * function ())
// function kaliTerusRekursif(angka) {
//   var numstr = angka.toString();
//   if (numstr.length <= 1){
//     return angka;
//   }
//   var a = Number (numstr.slice(0,1));
//   numstr = numstr.slice(1);
//   return kaliTerusRekursif(a * kaliTerusRekursif(numstr));
// }

// --- jawaban ke-tiga ---- numstr awal tidak di declare; numstr hanya untuk sisa string array
// function kaliTerusRekursif(angka) {
//   if (String(angka).length <= 1){
//     return angka;
//   }
//   var a = String(angka)[0]; // apparently string angka pada index 0 bisa dilakukan aritmatika
//   var numstr = String(angka).slice(1);
//   return kaliTerusRekursif(a * kaliTerusRekursif(numstr));
// }

// --- jawaban ke-empat ---- tiidak ada variable tambahan.
function kaliTerusRekursif(angka) {
  if (String(angka).length <= 1) return angka;
  return kaliTerusRekursif(String(angka)[0] * kaliTerusRekursif(String(angka).slice(1)));
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log ('');
console.log(kaliTerusRekursif(3)); // 3
console.log ('');
console.log(kaliTerusRekursif(24)); // 8
console.log ('');
console.log(kaliTerusRekursif(654)); // 0
console.log ('');
console.log(kaliTerusRekursif(1231)); // 6

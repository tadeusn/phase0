console.log('EXERCISE 9: BERLATIH MENGGUNAKAN FUNCTION');
console.log('Soal #1.');
// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa
// "Halo Function!", yang kemudian akan ditampilkan di console.

/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut(){
  return 'Halo function!';
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

console.log('');
console.log('Soal #2.');
// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan
// nilai berupa hasil kali dari dua parameter yang dikirim.
/*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(num1,num2){
  return num1*num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


console.log('');
console.log('Soal #3.');
// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses
// seluruh parameter yang diinput menjadi satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address],
// dan saya punya hobby yaitu [hobby]!"
/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(a,b,c,d){
  var e = '';
  return e.concat('Nama saya '+ a +', umur saya '+ b +' tahun, alamat saya di '+ c +', dan saya punya hobby yaitu '+ d +'!');
}



var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

console.log('');
console.log('EXERCISE 9 SELESAI. YAY!');

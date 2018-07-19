// Problem
// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
// Code

//this is totally fun code to have :D ... but this is the encoder not the decoder
function ubahHuruf(kata) {
  kata = kata.toLowerCase();
  var hasil = '';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < kata.length; i++){ //outer loop for kata
    for (var j = 0; j <alphabet.length; j++){ // inner loop observing alphabet
      if (kata[i]===alphabet[j]){
        var a = alphabet.indexOf(kata[i]) + 1; // find the index value of the letter in alphabet and move it by one;
        if (a === alphabet.length) { // this is a far better way of doing it rather than checking z and setting a;
          a = 0;
        }
        hasil = hasil + alphabet[a]; // pushing the letter to the result
      }
    }// end for inner loop obeserving alphabet
  a = 0;// reseting a;
  }// end of loof for kata;
  return hasil;
}

// TEST CASES
console.log(ubahHuruf('Wowz')); // xpx
console.log(ubahHuruf('Developer')); // efwfmpqfs
console.log(ubahHuruf('Javascript')); // kbwbtdsjqu
console.log(ubahHuruf('Keren')); // lfsfo
console.log(ubahHuruf('Semangat')); // tfnbohbu

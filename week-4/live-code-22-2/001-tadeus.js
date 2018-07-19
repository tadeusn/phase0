/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

/*
Algorithm:
0. persiapkan variable jawaban (array 1 dimensional) yg akan di return (didalam function reverseEven())
1. kita perlu akses masing-masing item(kata) di dalam array --> menggunakan looping i untuk melintasi array arr; dimana array[i] disimpan di variable penampungan sementara;
2. gunakan if clause dimana hanya akan jalan jika i % 2 === 0 (dengan kata lain urutan ganjil ; karena index mulai dari 0);
   a. jika ya (ganjil): gunakan for loop lagi (var j), tapi dari kanan ke kiri, dimana penampungan[j] ditambahkan (append) ke var penampungan2 --> menghasilkan kata yg terbalik;
   b. jika tidak (genap): variable penampungan2 = penampungan;
3. push string penampungan2 ke array jawaban.
4. call function reverseEven  untuk mendisplay (menggungakan console.log)


*/


 
function reverseEven (arr) {
  var jawaban = [];
  for ( var i = 0; i < arr.length; i ++){
    var penampungan = arr[i];
    // console.log(penampungan);
    var penampungan2 ='';
    if (i % 2 === 0){
      for ( var j = penampungan.length - 1; j >= 0; j-- ){
        var penampungan2 = penampungan2 + penampungan[j];
      }
    } else if ( i % 2 !== 0) {
      var penampungan2 = penampungan;
    }
    // console.log(penampungan2);
    jawaban.push(penampungan2);
  }
  return jawaban;


}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// []

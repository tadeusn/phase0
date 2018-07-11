console.log('TADEUS NUGRAHA. SOAL 003. LIVE CODE WEEK 3');
console.log('');

// Competencies: Loopings
/*
Competencies: Looping

=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/
// SKELETON CODE (Code Sample)

function height(p) {
  var supermi = '';
  var i = 0;
  var q = 0;
  while (p !==0){
    for ( i = p; i > 0; i-- ){
      for ( q = p; q > 0 ; q-- ){
        supermi = supermi.concat(q);
      }
      console.log(supermi);
      supermi ='';
      p = p-1;
    }
  }
}


height(3); // input height disini
console.log('');
height(5); // input height disini
console.log('');
height(1);// input height disini
console.log('');

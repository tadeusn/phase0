// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)


//* = Three
// @ = odd
// $ = even



//this is the function to know which symbols to show
function symbolic(symb){
  var x = 0;
  var y = 0;
  x = symb % 3;
  y = symb % 2;
  var a ='';
  if (x === 0){
    a = '*';
    return a;
  } else if  (x !== 0) {
      if ( y !== 0){
          a = '@';
          return a;
      } else if ( y === 0) {
            a = '$';
            return a;
        }
  } else {
      console.log('error');
      return;
  }
}

//this is the function given to display the structure
function drawSymbolicColsBox(num) {
  // your code here
  console.log('your number is: '+num);
  var supermi = '';
  var wdt = num;
  var cntr = 1;
  for (var i = 1; i <= wdt; i++){
    for (var p = 1; p <= wdt; p++){
      if (p !== wdt){
        supermi=supermi.concat(symbolic(cntr)+'-');
        //supermi=supermi.concat(cntr+' ');
      } else if ( p === wdt ){
          supermi=supermi.concat(symbolic(cntr));
      } else {
        console.log('error')
      }
      cntr=cntr+1;
    }
    console.log(supermi);
    supermi='';
  }
  console.log('');
}

drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
drawSymbolicColsBox(1);

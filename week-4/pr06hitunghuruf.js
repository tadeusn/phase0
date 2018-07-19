// Problem
// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
// Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
// Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
//   karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu.
//   Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
// Code
function hitungHuruf(kata) {
  kata = kata.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");  // delete all punctuation
  kata = kata.split(' '); // splitting the words to become an array// var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
  //console.log(kata);

  //now that everything is ready, we need to do two different loop; the outer loop is to look at the array elements, the inner loop is to check the number of matching words;
  var jawaban = [];

  for (var i = 0; i < kata.length; i++){ // the outer loop: looking at the elements
    var countstring = 0;
    var hurufbatas = '';
    var stringpembanding = kata[i][0];
    for (var j = 0; j <kata[i].length; j++){ // the innter loop: looking at each element's string huruf...
      for  (var k = j+1; k<kata[i].length; k++){ //!!! apparently we need another loop to go around the huruf to check // secret recepie: "k = j+1" because if k = j or k = 0 then it will add also the length of the words!!!!
        if (kata[i][j] === kata[i][k] && kata[i][k] !== hurufbatas){ //!! harus ditambah huruf batas!!!
          countstring = countstring + 1;
          hurufbatas = kata[i][j]// !!!!! this is important for instance of developer which has 3 e counted as 3 pairs, need to move out of the comparison !!!
        }
        //stringpembanding = kata[i][j];
      } //end of inner inner loop
    }// end of inner loop
  jawaban.push(countstring); //!!!!!!!! PUSH!!
  } // end of outer loop
  //console.log(jawaban);

  //apparently since we cannot use a reduce or so...another loop is needed to get the index of the biggest number in jawaban array..
  var indexjawaban = 0;
  var pembandingjawaban =jawaban[0];
  for (var l = 0; l<jawaban.length;l++){ // kalau diminta menampilkan set terakhir, then the looping from l = jawaban.length -1;
    if (jawaban[l] > pembandingjawaban){
      indexjawaban = l;
      pembandingjawaban = jawaban[l];
    }
  }
  return kata[indexjawaban];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever!')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau



//important!
// myString = myString.replace(/\D/g,'');  --> to replace all non D (digits)

//replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") can be specified..

//replace(/\s{2,}/g," ");  replacing extra space;

// str = str.replace(/[^\w\s]|_/g, "")
//          .replace(/\s+/g, " ");
//Detailed explanation:

//  \w is any digit, letter, or underscore.
//  \s is any whitespace.
//  [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
//  [^\w\s]|_ is the same as #3 except with the underscores added back in.

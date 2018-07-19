// Problem
// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya.
// Spasi dan simbol diabaikan.
// Code
function tukarBesarKecil(kalimat) {
  //!!!!!The toLowerCase() method does not change the original string.
  var jawaban = ''; //please be lebih teliti! hehehehe!!!!!!!!!!
  for (var i = 0; i<kalimat.length; i++){
    var hurufinput = kalimat[i]
    var hurufinputlower = kalimat[i].toLowerCase();
    var hurufinputupper = kalimat[i].toUpperCase();

    if (hurufinput === hurufinputlower){
      //console.log('kalimat[i]= '+kalimat[i]+', kalimat[i].toLowerCase()= '+kalimat[i].toLowerCase());
      hurufinput = kalimat[i].toUpperCase();
      //console.log ('hurufinput dari low ke up= '+hurufinput);

    }
    else if (hurufinput === hurufinputupper){
    //  console.log('kalimat[i]= '+kalimat[i]+', kalimat[i].toUpperCase()= '+kalimat[i].toLowerCase());
      hurufinput = kalimat[i].toLowerCase();
    //  console.log ('hurufinput dari up ke low= '+hurufinput);

    }
  jawaban = jawaban + hurufinput;
  }
  return jawaban;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

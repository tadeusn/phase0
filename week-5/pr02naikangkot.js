// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
// Function akan me-return array of object.
//
// Diberikan sebuah rute, dari A - F.
// Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
//
// Contoh:
// input: [['Dimitri', 'B', 'F']]
// output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]


// output form = [ { penumpang:, naikDari:, tujuan:, bayar: index-index*2000 }, { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
// input form = [ [name,from,to] [name,from,to] ] --> name from to all static


function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var answer = [];
  //var penumpang = {}; /// tanya teacher...
  var hitung = 0;
  if (arrPenumpang.length < 1){
    return answer;
  }
  for ( var i = 0; i < arrPenumpang.length; i++){
    var penumpang = {}; // apparently needs to be reset??? tdk bisa di rewrite ???? ///
    penumpang.penumpang = arrPenumpang[i][0];
    penumpang.naikDari = arrPenumpang[i][1];
    penumpang.tujuan = arrPenumpang[i][2];
    penumpang.bayar = (rute.indexOf(penumpang.tujuan)-rute.indexOf(penumpang.naikDari)) * 2000;
    answer.push(penumpang);
  }
  return answer;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

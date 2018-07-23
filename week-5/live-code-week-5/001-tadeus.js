/*
Title Givers
==============
Name :TADEUS NUGRAHA

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()!
*/

// algorithm:
// 1. function titleGivers menerima input targetArr dan title;
// 2. buat variable answer dalam bentuk array.
// 2. buat looping untuk targetArr dari index 0 sampai index< length dengan inkremental penghitung index i += 1:
//   2.a jika huruf pertama title adalah ',' maka: push ke array jawaban : isi tergetArr index + title;
//   2.b jika tidak:  push ke array jawaban: title + isi tergetArr index tersebut.
// 3. function titleGivers me-return variable answer kembali ke pemerintaan concosle.log yg tersedia.

function titleGivers (targetArr, title) {
  var answer = [];
  for (var i = 0; i< targetArr. length; i++){
    if (title[0]===','){
      answer.push(String(targetArr[i])+ String(title));
    }
    else{
      answer.push(String(title)+' '+String(targetArr[i]));
    }
  }
  return answer;
}

console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.'));
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// Output
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]

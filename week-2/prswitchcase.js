// Kamu akan diberikan sebuah tanggal dalam tiga variabel,
// yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// var hari = 21; var bulan = 1; var tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 10; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1916; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var leapyear = false;
var p = 0;
var q = 0;
var r = 0;
var salahinput = false;
console.log ('ini adalah initial inputan semua variable:');
console.log ('tanggal = '+tanggal+', bulan = '+bulan+', tahun = '+tahun);
console.log ('leapyear = '+leapyear+', p = '+p+', q = '+q+', r = '+r+' salahinput = '+salahinput);
p = tahun % 4;
q = tahun % 100;
r = tahun % 400;
//cek tahun kabisat agar tahu apakah input hari bulan tahun valid
switch (q){
  case 0:
    switch (r){
      case 0:
        leapyear = true;
        break;
    }
    break;
}
// untuk negasi angka 0 atau lebih besar-kecil tidak bisa pakai switch jadi pakai if
if (q !== 0){
  switch (p){
    case 0:
      leapyear = true;
      break;
  }
}

if (leapyear  && bulan === 2){
  if (tanggal < 1 || tanggal > 29) {
    console.log ('ada kesalahan inputan tanggal pada bulan '+bulan+'; mohon input ulang!');
    salahinput = true;
  }
}

if (leapyear === false && bulan === 2){
  if (tanggal < 1 || tanggal > 28) {
    console.log ('ada kesalahan inputan tanggal pada bulan '+bulan+'; mohon input ulang!');
    salahinput = true;
  }
}

if (tahun < 1900 || tahun >2200){
  console.log ('ada kesalahan inputan tahun; mohon input ulang!');
  salahinput = true;
}

if (bulan < 1 || bulan > 12){
  console.log ('ada kesalahan inputan bulan; mohon input ulang!');
  salahinput = true;
}

if (bulan === 1 ||bulan === 3 || bulan === 5 ||bulan === 7 ||bulan === 8 ||bulan === 10 || bulan === 12) {
  if (tanggal < 1 || tanggal > 31) {
    console.log ('ada kesalahan inputan tanggal; mohon input ulang!');
    salahinput = true;
  }
}

if (bulan === 4 ||bulan === 6 || bulan === 9 ||bulan === 11 ) {
  if (tanggal < 1 || tanggal > 30) {
    console.log ('ada kesalahan inputan tanggal; mohon input ulang!');
    salahinput = true;
  }
}

console.log ('');
console.log ('kondisi akhir masing-masing variable:');
console.log ('tanggal = '+tanggal+', bulan = '+bulan+', tahun = '+tahun);
console.log ('leapyear = '+leapyear+', p = '+p+', q = '+q+', r = '+r+' salahinput = '+salahinput);

//menampilkan tanggal bulan tahun jika salahinput = false
if (salahinput === false) {
  console.log ('');
  switch (bulan){
    case 1 :
      console.log ('Output = '+tanggal+' Januari '+tahun+' ');
      break;
    case 2 :
      console.log ('Output = '+tanggal+' Februari '+tahun+' ');
      break;
    case 3 :
      console.log ('Output = '+tanggal+' Maret '+tahun+' ');
      break;
    case 4 :
      console.log ('Output = '+tanggal+' April '+tahun+' ');
      break;
    case 5 :
      console.log ('Output = '+tanggal+' Mei '+tahun+' ');
      break;
    case 6 :
      console.log ('Output = '+tanggal+' Juni '+tahun+' ');
      break;
    case 7 :
      console.log ('Output = '+tanggal+' Juli '+tahun+' ');
      break;
    case 8 :
      console.log ('Output = '+tanggal+' Agustus '+tahun+' ');
      break;
    case 9 :
      console.log ('Output = '+tanggal+' September '+tahun+' ');
      break;
    case 10:
      console.log ('Output = '+tanggal+' Oktober '+tahun+' ');
      break;
    case 11:
      console.log ('Output = '+tanggal+' November '+tahun+' ');
      break;
    case 12:
      console.log ('Output = '+tanggal+' December '+tahun+' ');
      break;
  }
}

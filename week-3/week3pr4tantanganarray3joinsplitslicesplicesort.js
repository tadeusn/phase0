// Menggunakan Built-in Function pada Array
// Array pada JavaScript memiliki sekumpulan built-in function yang digunakanuntuk mempermudah developer untuk mengolah data di dalamnya.
// Beberapa fungsi yang sering digunakan antara lain: join, split, slice, splice, dan sort.
// Objectives
// Mengerti Kegunaan dari Built-in Function yang dimiliki Array; Mampu Menggunakan Built-in Function yang dimiliki Array;
// Directions
// contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah.
// Lalu console.log array yang baru seperti di bawah.
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
//Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
//Format tanggal pada data adalah dd-mm-YYYY
//Misal angka bulan 01, tuliskan "Januari"
//Gunakan switch case untuk menuliskan bulan di atas.
//Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
//Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
//Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
//Test-case
//Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.
//var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
//dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 4: TANTANGAN ARRAY 3: BUILT IN FUNCTION DALAM ARRAY');
console.log('-------------------------------------------------------------------');
console.log('');

var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

console.log('INPUT = '+input);
console.log('');

function dcsndng(a,b){
  return a - b;
}

function dataHandling2 (isian){
  //soal> splice so output = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  isian.splice(1, 1, "Roman Alamsyah Elsharawy");
  isian.splice(2, 1,'Provinsi Bandar Lampung');
  isian.splice(4, 1,'Pria', 'SMA Internasional Metro');
  console.log('AFTER SPLICE = '+isian);
  //soal>Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan
  var tanggal = isian[3];
  //soal>Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
  tanggal=tanggal.split('/');// split the string to 3 array elements by '/' found in the string
  //soal>Gunakan switch case untuk menuliskan bulan di atas.
  switch (tanggal[1]){
    case '01': console.log('JANUARI'); break;
    case '02': console.log('FEBRUARI'); break;
    case '03': console.log('MARET'); break;
    case '04': console.log('APRIL'); break;
    case '05': console.log('MEI'); break;
    case '06': console.log('JUNI'); break;
    case '07': console.log('JULI'); break;
    case '08': console.log('AGUSTUS'); break;
    case '09': console.log('SEPTEMBER'); break;
    case '10': console.log('OKTOBER'); break;
    case '11': console.log('NOVEMBER'); break;
    case '12': console.log('DECEMBER'); break;
  }
  //soal>Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
  var tgl = tanggal.slice(); //var newArray = oldArray.slice(); //if not both tgl and tanggal will change after sort although cuman salah satu yg di change;
  tgl.sort((a, b) => b - a); //!!!!using ES6 arrow functions:// numArray.sort((a, b) => a - b); // For ascending sort
  console.log(tgl);
  //soal>Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
  var tgl1 = tanggal.join('-');
  console.log(tgl1);
  //soal>Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
  var nama= isian[1];
  var nam1= nama.slice(0,15); //ambil data diantara index 0 sampai sebelum index 15; harus dg var baru;
  console.log(nam1);
}

dataHandling2(input);

console.log('');
console.log('-------------------------------------------------------------------');
console.log('WEEK 3 EXERCISE 4: TANTANGAN ARRAY 3: SELESAI');
console.log('-------------------------------------------------------------------');


// !!!materi untuk built-in function array!!! https://github.com/hacktiv8/phase-0-activities/blob/master/modules/js-array.md
/*
sort()
Sort adalah fungsi array yang akan mengurutkan nilai dari array. Perlu diperhatikan, sort mengurutkan otomatis secara ascending dan diurutkan berdasarkan unicode dari karakter. Kamu akan menemukan masalah ini saat mengurutkan angka.

var arr = [3, 5, 7, 1, 2];
arr.sort();
console.log(arr); // 1, 2, 3, 5, 7

var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];
arrChar.sort();
console.log(arrChar); // 'Ahmad', 'Budi', 'Charlie', 'Tono'
Contoh masalah sort() pada angka:

var arr = [1, 2, 15];
arr.sort();
console.log(arr); // 1, 15, 2
Hasil dari sort di atas tidak sesuai dengan ekspektasi kita! Seharusnya 1, 2, 15 namun yang terjadi adalah 1, 15, 2. Hal ini karena JavaScript melakukan sort secara unicode atau sebagai karakter, dan karena 15 diawali dengan karakter '1', maka akan dianggap lebih awal daripada karakter '2'. Untuk menyelesaikan masalah ini, kamu perlu menambahkan satu parameter berupa fungsi pembanding. Mungkin kamu akan sedikit bingung dengan code dibawah ini, namun intinya adalah kita membuat satu fungsi yang menilai apakah nilai pertama lebih kecil dari nilai kedua.

var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 > value2 });
console.log(arr); // 1, 2, 15
dengan fungsi di dalam ini, kita juga bisa membuat fungsi sort yang descending:

var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 < value2 });
console.log(arr); // 15, 2, 1
-------
slice()
Slice adalah fungsi array yang akan mengambil irisan atau porsi dari sebuah array. Fungsi slice menerima satu atau dua parameter. Parameter pertama adalah index irisan diambil, dan parameter kedua adalah index irisan terakhir diambil. Jika parameter kedua tidak didefinisikan, irisan akan diambil hingga akhir dari array.

var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]
var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]
var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]
var irisan4 = arr.slice(2, 2);
console.log(irisan4); // [] KOSONG!
-------
splice()
Splice adalah fungsi array yang menghapus dan/atau menambah nilai ke dalam array. Fungsi splice menerima satu, dua, atau lebih parameter.

Strukturnya adalah sebagai berikut:

array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);
IndexMulai = index array yang akan dimodifikasi. JumlahNilaiYangDihapus = jumlah nilai yang dihapus, dimulai dari IndexMulai. Misal, IndexMulai nya 0, dan JumlahNilaiYangDihapus adalah 2. Maka kita akan menghapus dua nilai mulai dari index 0, yaitu nilai di index 0 dan index 1. NilaiYangDitambahkan1, NilaiYangDitambahkan2, ... = nilai-nilai yang akan ditambahkan setelah IndexMulai.

Gambarannya dicontohkan sebagai berikut:

var arr = ["buku", "laptop", "komputer"];
arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

arr.splice(0, 2); // Menghapus 2 nilai dari index 0
console.log(arr); // ["televisi", "komputer"]

arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
console.log(arr); // [majalah", "koran", "komputer"]
--------
split()
Split adalah fungsi yang memecah string dan mengembalikan nilai berupa array sesuai dengan separator atau pemisah tertentu yang didefinisikan. Fungsi split menerima satu parameter, yaitu karakter apa yang akan menjadi pemisah/separator.

var kalimat = "saya adalah full-stack javascript programmer!";
var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
console.log(kata); // ["saya", "adalah", "full-stack", "javascript", "programmer!"]*/

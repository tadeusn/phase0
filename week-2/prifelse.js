// Directions
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel(untuk sekarang)yaitu nama & peran.
// Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan
// peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran
// serta mengeluarkan respon sesuai isi variabel tersebut.

console.log('INI GAME PROXYTIA');
var nama = 'Wiro Sableng';
var peran = 'Wong Gendheng';
console.log('Pilih Peranmu untuk memulai game');
// karena hanya boleh If-Else
if (nama === '' || nama === ' '){
  if (peran ==='' || peran === ' '){
    console.log('Nama harus diisi!');
  } else if (peran ==='Ksatria' || peran === 'ksatria'){
      console.log('Anda memilih peran = Ksatria. Tapi nama anda harus diisi!');
  } else if (peran ==='Tabib' || peran === 'tabib'){
      console.log('Anda memilih peran = Tabib. Tapi nama anda harus diisi!');
  } else if (peran ==='Penyihir' || peran === 'penyihir'){
      console.log('Anda memilih peran = Penyihir. Tapi nama anda harus diisi!');
  } else {
      console.log('Ada kesalahan pada pengisian Peran!');
  }
} else if (nama !== '' && nama !== ' '){
    if (peran ==='' || peran === ' '){
      console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
    } else if (peran ==='Ksatria' || peran === 'ksatria'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!');
    } else if (peran ==='Tabib' || peran === 'tabib'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka!');
    } else if (peran ==='Penyihir' || peran === 'penyihir'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo '+peran+' '+nama+', ciptakan keajiaban yang membantu kemenanganmu!');
    } else {
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Ada kesalahan pada pengisian Peran!');
  }
} else {
  console.log('Ada kesalahan pada pengisian!');
}

// Hints
// Variabel tetap di-input secara manual.
// Variabel nama dan peran dapat diisi apa saja.
// Nama tidak perlu dicek sama persis seperti contoh input/output
// Buat If-Else berbeda masing-masing untuk mengecek peran
// Input
// //Contoh input
// var nama = 'Mikael';
// var peran = '';
// Silakan ganti nilai nama dan peran untuk mengetes kondisi!
//
// Output
// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"
//
// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"
//
// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"
//
// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."
//
// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

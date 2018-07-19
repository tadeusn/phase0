// Problem
// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
// Parameter pertama merupakan memberId; dan
// parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.
//
// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:
// 0.Sepatu brand Stacattu seharga 1.500.000
// 1.Baju brand Zoro seharga         500.000
// 2.Baju brand H&N seharga          250.000
// 3.Sweater brand Uniklooh seharga  175.000
// 4.Casing Handphone seharga         50.000
//
// Buatlah function yang akan mengembalikan sebuah object
// dimana object tersebut berisikan:
//   informasi memberId, money, listPurchased, & changeMoney.
//
// Jika memberId kosong: "Mohon maaf, toko X hanya berlaku untuk member saja" v
// Jika uang < 50.000 : "Mohon maaf, uang tidak cukup" v
//
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu
//  dan akan membeli barang-barang yang sedang SALE
//     masing-masing 1: jika uang yang dimilikinya masih cukup.
//
// Contoh jika inputan memberId: '324193hDew2' dan money: 700.000
//
// maka output:
//
// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

// jadi.... uang = x; bandingkan dg barang yg bisa di beli dr yg paling besar, kemudian lihat lagi apakah ada barang yg bisa dibeli lagi...

function shoppingTime(memberId, money) {
  console.log('Input = '+memberId+ ', '+money);
  var answer = {};
  answer.memberId = memberId;
  answer.money = money;
  if (memberId === ''|| memberId == undefined ){ // --> || isNaN(memberId) === true --> ternyata ndak bisa dipakai... hmmm
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  if (money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  var itemnames = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N','Sweater Uniklooh','Casing Handphone' ]; // items bank
  var itemprice = [1500000, 500000, 250000, 175000, 50000];
  var itemsbought = []; // this is for the input for the .listPurchased
  for (var i = 0; i < itemprice.length; i++){
    if (itemprice[i] <= money){
      money = money - itemprice[i]; //reduce the money
      itemsbought.push(itemnames[i]); // push the item bought
    }
  }
  answer.listPurchased = itemsbought;
  answer.changeMoney = money;
  console.log ('Hasil Belanja = ');
  return answer;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log('');
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log('');
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log('');
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log('');
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

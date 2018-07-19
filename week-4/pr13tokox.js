// Problem
// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Sepatu Stacattu,1500000, 10
// Baju Zoro, 500000, 2
// Sweater Uniklooh, 175000, 1

// Function akan menerima array yang berisikan object pembeli:
// (nama pembeli,
//  barang yang ingin dibeli, dan
//  jumlah barang yang dibelinya).

// >> Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit me-return Array Object:
//   dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang,
//   siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

// input = array[ {objectpembeli1}, {objectpembeli2} ,{objectpembeli3} .....]
 // array [ {index0}, {index1}, {index2}, ....] --> dinamis
// ... so.... for loop untuk go to akses tiap object lewat index;
// output = array [ {product 1} {product 2} {product3}] --> tidak dinamis?
// listbarang = [ [0 = nama, 1= harga, 2 = sisa] [item 2] [item3]];

//1 first check the items which has the .product; then check the items



function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  if (shoppers[0] === undefined){
    return '[]';
  }
  var answer = []; // for array to be returned;
  for (var i = 0; i < listBarang.length;i++){ // i is for the listbarang;
    var product= {}; // for each product
    var namashopper = []; // this is for the .shoppers output;
    var jumlahterjual = 0; // lets do this for each item
    product.product = listBarang [i][0]; //product di-isi nama;
    //now getting the  shoppers; leftOver; and totalprofit;
    for (var j = 0; j< shoppers.length; j++){ // j is for the shoppers;
      if (shoppers[j].product === listBarang[i][0]) {
        if (shoppers[j].amount <= listBarang[i][2]) {
          listBarang[i][2] -= shoppers[j].amount;
          jumlahterjual += shoppers[j].amount;
          namashopper.push(shoppers[j].name);
        }
      }

    } // INNER FOR
    product.shoppers =  namashopper;
    product.leftOver = listBarang[i][2];
    product.totalProfit = listBarang[i][1] * jumlahterjual;
    answer.push(product);
  }//OUTTER FOR
  return answer;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log('');
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log('');
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log('');
console.log(countProfit([])); //[]

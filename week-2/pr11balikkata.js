console.log('EXERCISE 11. BALIK KATA');
console.log('');

// Problem
// Diberikan sebuah function balikKata(kata)
// yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik.
// Contoh, jika kata adalah "John Doe",
// function akan me-return "eoD nhoJ".
// Code
function balikKata(kata) {
  // you can only write your code here!
  var kata2 = '';
  for (i = kata.length - 1 ; i >= 0 ; i -- ){
    kata2 = kata2.concat(kata[i]);
  }
  return kata2;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


console.log('');
console.log('EXERCISE 11 SELESAI. YAY!');

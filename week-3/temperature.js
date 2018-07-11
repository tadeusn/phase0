// TEMPERATURE PSUEDOCODE
//
// SET `celcius` to any numeric value;
// SET `wantedtemperature` to any text or string value;
// SET `result` to any numeric value;
// READ temperature input in celcius SAVE to variable `celcius`;
// READ conversion wanted input SAVE to variable `wantedtemperature`;
// IF `wantedtemperature` is equal to 'R' or 'r' or 'reamur' or 'REAMUR' or 'Reamur' THEN:
//     CALCULATE `result` = `celcius` * 4 / 5;
//   ELSE IF `wantedtemperature` is equal to 'F' or 'f' or 'farenheit' or 'FARENHEIT' or 'Farenheit' THEN:
//     CALCULATE `result` = `celcius` * 9 / 5 + 32;
//   ELSE
//     DISPLAY "input error";
//   END IF
// DISPLAY `result`;

function convertfromcelcius(input1, input2){
  var input2 = input2.toLowerCase()
  var result = 0;
  if (input2 ==='r' || input2 ==='reamur' ){
      result = input1 * 4 / 5;
  } else if (input2 ==='f' || input2 ==='farenheit' ){
      result = input1 * 9 / 5 + 32;
  } else {
      console.log('error input');
  }
  return result;
}

// console.log(convertfromcelcius(37,'R')) // input here
// console.log(convertfromcelcius(43,'f')) // input here



function boxofasteriks(input1){
  var asteriks = '';
  for (var i = 0; i < input1; i++){
    if (i === 0 || i === input1 - 1){
        for (var j = 0; j < input1; j++){
          asteriks = asteriks + '*';
        }
    } else if ( i > 0 && i < input1 - 1){
        for (var j = 0; j <input1; j++){
          if (j === 0 || j === input1 - 1){
              asteriks = asteriks + '*';
          } else {
                asteriks = asteriks + ' ';
          }
        }
    } else {
          console.log('error');
    }
    console.log (asteriks);
    asteriks = '';
  }
  console.log('');
}

// boxofasteriks(1);
// boxofasteriks(2);
// boxofasteriks(3);
// boxofasteriks(4);
// boxofasteriks(5);


/*
klo 3 baris
  *
 ***
*****


*/

function segitiga(input1){
  var asteriks = '';
  var panjangcolom = input1*2-1;
  var midpoint  = Math.round(panjangcolom / 2) - 1; // given minus one because index starts from = 0;
  for (var row = 0; row < input1; row ++){
      for (var col = 0; col < panjangcolom; col++){
        var bataskiri = midpoint - row;
        var bataskanan = midpoint + row;
        if (col === midpoint){
          asteriks = asteriks + '*';
        } else if (col >= bataskiri && col <= bataskanan){
          asteriks = asteriks + '*';
        } else {
          asteriks = asteriks + ' ';
        }
      }
  console.log(asteriks);
  asteriks='';
  }
  console.log('');
}
// segitiga(5);
// segitiga(3);


/*

  *
 ***
*****
 ***
  *

*/


function diamond(input1) {
  var asteriks='';
  var panjangkolom = input1 * 2 -1;
  var midpoint = Math.round(panjangkolom /2) -1 // given minus one because index starts from = 0;
  //lets do the upper triangle first
  for (var row = 0; row < input1; row++){
    bataskiri = midpoint - row;
    bataskanan = midpoint + row;
    for (var col = 0; col < panjangkolom; col++){
      if (col === midpoint){
        asteriks = asteriks + '*';
      } else if (col >= bataskiri && col <= bataskanan){
        asteriks = asteriks + '*';
      } else {
        asteriks = asteriks + ' ';
      }
    }// end of column upper triangle
    console.log(asteriks);
    asteriks='';
  }//end of row upper triangle
  // now let's do the upside down triangle
  for (row = input1 - 2; row >= 0; row--) {
    bataskiri = midpoint - row;
    bataskanan = midpoint + row;
    for (col = 0; col < panjangkolom; col ++){
      if (col ===midpoint){
        asteriks = asteriks + '*';
      }else if (col >= bataskiri && col <= bataskanan){
        asteriks = asteriks + '*';
      } else {
        asteriks =  asteriks + ' ';
      }
    }//end of upside down coloumn
    console.log(asteriks);
    asteriks='';
  }// wnd of upside down row

 console.log('')
}

diamond(5);
diamond(3);

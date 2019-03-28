/*
==================
Number Processing
==================
mod1=0,2
[INSTRUCTION]
Terdapat function numberProcessing yang menerima sebuah parameter berupa array,
function akan mencari nilai min , max, dan rata -rata, serta mengelompokan angka ganjil dan genap , lalu menggabungkannya menjadi string

[EXAMPLE]
input: [1, 3, 5, 1, 2, 8, 10, 0, 3]
output: "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"


[RULES]
- Wajib menggunakan Pseudocode
- Tidak boleh menggunakan Function bawaan Math apapun.
- Jika mean dalam bentuk desimal, bulatkan kebawah.

*/

function numberProcessing(numberArr) {
  //your code here

numberArr.toString()
  var min = 0;
  var max = 0;
  for (var i = 0; i < numberArr.length; i++) {
    for (var j = 0; j < numberArr.length; j++) {
      if (numberArr[j] < numberArr[i]) {
        min = numberArr[j];
        // console.log(min)
      }
      if (numberArr[j] > numberArr[i]) {
        max = numberArr[j];
        // console.log(max)
      }
    }
  }

  var jumlah = 0;
  var avg;
  for (var k = 0; k < numberArr.length; k++) {
    jumlah += numberArr[k];
  }
  avg = (jumlah / numberArr.length);
  bulat=avg%1;
  bulat1=avg-bulat;



  var odds = '';
  var evens = '';
  for (var l = 0; l < numberArr.length; l++) {
    if (numberArr[l] % 2 === 0) {
      evens += numberArr[l]+'-';
    }
    else {
      odds += numberArr[l]+'-';
    }
  }

  var result = 'Min: ' + min + ', ' + 'Max: ' + max + ', ' + 'Avg: ' + bulat1 + ', ' + 'Odds: ' + odds + ', ' + 'Evens: ' + evens
  return result
  console.log.y

}


console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"

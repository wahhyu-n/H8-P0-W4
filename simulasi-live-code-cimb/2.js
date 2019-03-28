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
    
    var odds =[];
    var even =[];
    var temp;
    var avg = 0;

    
    for(i=0;i<numberArr.length;i++){
        for(j=0;j<numberArr.length-i;j++){//
            if(numberArr[j] > numberArr[j+1]){
                temp = numberArr[j];
                numberArr[j] = numberArr[j+1];
                numberArr[j+1] = temp;
            }

        }

        if(numberArr[i]%2 !== 0){
            odds.push(numberArr[i])
        }
        else if (numberArr[i]%2 == 0){
            even.push(numberArr[i])
        }

        avg += numberArr[i]  ;


    }

    
    var g = (avg / numberArr.length);
    var z = g%1;//mencari average tanpa math floor
    var k  = g - z ;
    y = odds.join("-")

    

    return "Min : " + numberArr[0] + ", Max : " + numberArr[numberArr.length-1] + ", Avg : " + k + ", Odds : " + odds.join("-") +  ", even : " + even.join("-");



  }


  
  console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
  // "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
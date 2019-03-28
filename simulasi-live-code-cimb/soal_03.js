/*
==================================
Array Mastery: Shortest Word
==================================

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[RULES]
Dilarang menggunakan function .map/.filter/.reduce!
Dilarang menggunakan regex!n array result
Dilarang menggunakan fungsi string seperti split, substring, slice
*/



function shortestWords(words) {//, divider
  //your code here
  // var count=0
  // var arr=[]
  // var kalimat=words+" "//divider
  // for(var i=0;i<kalimat.length; i++){
  //   // console.log(words[i])
  //   count++
  //   if(kalimat[i]==''||i==kalimat.length-1){
  //     arr.push(count-1)
  //     count=0
  //     arr.push(count=1)
  //   }
  // }
  var str = []
  var temp = '';
  for (var i = 0; i < words.length; i++) {
    var found = false;
    if (words[i] !== ' ') {
      found = true;
      temp += words[i];
    }
    // console.log(temp)
    
    if (found === false || i == words.length - 1) {//agar sampai index terakhir
      str.push(temp);
      temp = '';
    }
    // console.log(str)
  }
    var pembanding = str[0].length;
    for (var i = 0; i < str.length - 1; i++) {
      if (pembanding > str[i + 1].length) {
        pembanding = str[i + 1].length;
      }
    }
    // return pembanding;

    var arrShort = []
    for (var j = 0; j < str.length; j++) {
      if (str[j].length === pembanding) {
        arrShort.push(str[j])
      }
    }
    var arrNew=[arrShort[0]]
    // for (var k = 0; k < arrShort.length-1; k++) {
      for(var l=0; l<arrShort.length-1; l++)
      if (arrShort[l].toLowerCase() !== arrShort[l+1].toLowerCase()) {
        arrNew.push(arrShort[l+1])
      }
    return arrNew
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']


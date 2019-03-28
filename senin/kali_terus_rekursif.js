function kaliTerusRekursif(angka){
    var angkaString=angka.toString();
    if(angkaString.length===1){
        return Number(angka);
    }
    else{
        var perkalian=1;
        for(var i=0; i<angkaString.length; i++){
            
            var perkalian=perkalian*Number(angkaString[i]);
        }
        
    }
    return kaliTerusRekursif(perkalian);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
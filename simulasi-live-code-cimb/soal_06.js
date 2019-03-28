/*
    ==================
    Filter Odd Number
    ==================

    buatlah sebuah program yang dapat memfilter angka ganjil
    dari sebuah array dengan metode rekursive

    [EXAMPLE]
    input : 
    [1,8,4,3,7,3,9,10,4,21,8]

    output:
    [1,3,7,3,9,21]

    [Rules]
    1. Dilarang menggunakan loop apapun

*/

function filterData(arr) {
// code 
//rekursif ada stoppernya
// console.log('halo saya jalan', arr)
var result=[];
if(arr.length==0){
    return arr
}
else if(arr[0]%2==1){
    result.push(arr[0])
}

// var a= (arr[0].toString()+','+filterData(arr.slice(1))).split(',')
return result.concat(filterData(arr.slice(1)))
}


console.log(filterData([
    1,2,3,4,5,6
]))
// [1,3,5]

console.log(filterData([1,8,4,3,7,3,9,10,4,21,8]))
//  [1,3,7,3,9,21]





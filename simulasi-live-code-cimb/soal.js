function denny(number){
    if(number%3==0 && number%4==0){
        return 'Denny Wijaya'
    }
    else if(number%4==0){
        return 'Wijaya'
    }
    else if(number%3==0){
        return 'Denny'
    }
    
}
console.log(denny(9))
console.log(denny(8))
console.log(denny(6))
//     var nama='';
//     for(a=0; a<arr.length; a++){
//         // for(b=0; b<arr.length; b++){
//             if(arr[a]%3==0){
//                 nama='Denny';
//             }
//             if(arr[a]%4==0){
//                 nama='Wijaya';
//             }
//             if(arr[a]%3==0&&arr[a]%4==0){
//                 nama='Denny Wijaya'
//             }
//         }
//     return nama;
// }

// console.log(kata([4]))
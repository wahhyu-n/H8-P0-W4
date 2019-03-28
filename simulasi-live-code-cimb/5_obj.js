/*
=============
ANIME REPORT
=============

[INSTRUCTION]
Anime Report adalah sebuah function yang menerima sebuah input berupa array of object.
ANime report akan memproses data dan mengembalikan object yang berisi informasi anime berdasarkans Role dan Title

[EXAMPLE]
Contoh input dan output bisa dilihat di test case

[RULE]
1. dilarang menggunakan fungsi js ES 6
2. dilarang menggunakan regex
3. dilarang menggunakan fungsi string : substring, split, slice
*/

function parsing(arr){
    var role = {}
    var title = {}
 for (var i = 0; i < arr.length; i++){
   if(role[arr[i].role] === undefined){
     role[arr[i].role] = []
   }
   if(title[arr[i].anime] === undefined){
     title[arr[i].anime] = []
   }

   role[arr[i].role].push(arr[i].name)
   title[arr[i].anime].push(
     {
       id : arr[i].id,
       name : arr[i].name
     }
   )

 }

 return{
   Role: role,
   Title: title
 }
}
  
  
  var characters =
    [
      { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
      { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
      { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
      { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
      { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
      { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
      { id: 726, name: 'Wanijima, Agito', role: 'Main', anime: 'Air gear' }
    ]
  
  
  console.log(JSON.stringify(parsing(characters), null, 4));
  
    
  
    //output 
    // 
    //   {
    //     Role: {
    //       Main: ['Anna Liebert', 'Johan Liebert', 'Kenzou Tenma', 'Edward Elric', 'Alphonse Elric'],
    //       Supporting: ['Hugo Bernhardt', 'Agito Wanijima']
    //     },
    //     Title: {
    //       Monster: [
    //         { id: 720, name: 'Liebert, Anna' },
    //         { id: 721, name: 'Liebert, Johan' },
    //         { id: 722, name: 'Tenma, Kenzou' },
    //         { id: 723, name: 'Bernhardt, Hugo' }
    //       ],
    //       FMA: [
    //         { id: 724, name: 'Elric, Edward' },
    //         { id: 725, name: 'Elric, Alphonse' },
    //       ],
    //       "Air Gear": [
    //         { id: 726, name: 'Wanijima, Agito' }
    //       ]
    //     }
    //   }
  
  
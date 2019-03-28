/*
    ================
    matrix Transpose
    ================

    [INSTRUCTION]
    buatlah sebuah program yang dapat men transpose Matriks. yaitu merubah 
    row pada matriks menjadi column di matriks yang baru.  

    [EXAMPLE]
    input: 
    [
        [1,2,3]
    ]
    berubah jadi : 
    [
        [1],
        [2],
        [3]
    ]

    input:
    [
        [1,2,3],
        [4,5,6]
    ]
    berubah menjadi :  
    [
        [1,4],
        [2,5],
        [3,6]
    ]

    input: 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    berubah menjadi : 
    [
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ]

*/

function matrixTranspos(arr) {
  //code 
// var rows = arr.length
// var cols = arr[0].length

  var grid = []
  for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {//agar mendeteksi hanya array 0 saja
    // console.log(arr[i].length)
    if(arr[i][j]===undefined){
     continue;
    }
    if(grid[j]===undefined){
      grid[j]=[]
    }
    grid[j][i]=arr[i][j]
    }
  }
  return grid;
}
  
// C:\Users\ASUS\Desktop\HACKTIV8\H8-P0-W3\kamis>node
console.log(matrixTranspos(
  [
    [1, 2, 3]
  ]
))
/*
  [
      [1],
      [2],
      [3]
  ]
*/

console.log(matrixTranspos(
  [
    [1, 2, 3],
    [4, 5, 6]
  ]
))
/*
  [
      [1,4],
      [2,5],
      [3,6]
  ]
*/

console.log(matrixTranspos(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
))
/*
  [
      [1,4,7],
      [2,5,8],
      [3,6,9]
  ]
*/
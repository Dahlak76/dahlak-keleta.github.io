
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var row = "";
  for (let i = 0; i < num; i++){
    row += "#";
    console.log(row);
    }
  }

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // for(i = 0; i <= 100; i++){
  //   let output = "";
  //   if(i % 5 == 0 && i % 3 != 0){
  //     console.log("Buzz");
  //     }else if(i % 3 == 0 && i % 5 != 0){
  //       console.log("Fizz");
  //       }else if(i % 5 == 0 && i % 3 == 0){
  //         console.log("FizzBuzz");
  //       }console.log(output || i);
  //     }
    
  for (let n = 1; n <= 15; n++) {
    let output = "";
    if (n % 3 == 0) output += "fizz";
    if (n % 5 == 0) output += "buzz";
    console.log(output || n);
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  

  let board = "";
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

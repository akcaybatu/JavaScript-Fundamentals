// Triangle Exercise
// First one made with while loop second one is made with for loop
// let a = ""
// while (a.length <= 6){
//     a += "#"
//     console.log(a);
// }

// for (let b = ""; b.length <= 7; b += "#"){
//     console.log(b)
// }

// // FizzBuzz Exercise
// for (let num = 0; num <= 100; num += 1){
//     if (num % 3 == 0 && num % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if(num % 3 == 0){
//         console.log("Fizz");
//     }
//     else if (num % 5 == 0 && num % 3 != 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(num);
//     }
// }

// Chessboard Exercise
let size = 8; //this is the variable setting

let board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (let y = 0; y < size; y++) { /*in the outer loop we add newline to seperate rows*/
  for (let x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
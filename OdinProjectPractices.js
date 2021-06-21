// num add
let add7 = (num) => num + 7;
console.log(add7(7));


// first and second multiply
let multiply = (first, second) => first * second;
console.log(multiply(10, 9));


// capitalize the first letter
let capitalize = (takeString) => {
    //return takeString.replace(takeString[0], takeString[0].toUpperCase());
    return takeString[0].toUpperCase() + takeString.slice(1);
}
console.log(capitalize("mehmet"));


// return the last letter
let lastLetter = (last) => {
    x = last.length - 1;
    console.log(last[x]);
}
lastLetter("Batuhan Akçay");


// factorial of given number
function factorialize(number) {
    if (number < 0){ 
        return -1;
    }
    else if (number == 0){ 
        return 1;
    }
    else {
        return (number * factorialize(number - 1));
    }
}
console.log(factorialize(5));
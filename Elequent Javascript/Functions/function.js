const square = function(x){
    return x * x;
}
console.log(square(12));

// Function without parameter
const makeNoise = function(){
    console.log("Dont make noise");
}
makeNoise();


// Function with double parameter
const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};
console.log(power(2,10));


function greet(who) {
    console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye");

        
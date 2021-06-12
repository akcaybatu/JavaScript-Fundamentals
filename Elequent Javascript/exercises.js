// Triangle Exercise
// First one made with while loop second one is made with for loop
let a = ""
while (a.length <= 6){
    a += "#"
    console.log(a);
}

for (let b = ""; b.length <= 7; b += "#"){
    console.log(b)
}

// FizzBuzz Exercise
for (let num = 0; num <= 100; num += 1){
    if (num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num % 3 == 0){
        console.log("Fizz");
    }
    else if (num % 5 == 0 && num % 3 != 0){
        console.log("Buzz")
    }
    else{
        console.log(num);
    }
}

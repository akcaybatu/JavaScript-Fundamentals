let total = 0, count = 1;
while (count <= 10){
    total += count;
    count += 1;
}
console.log(total);

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return factorial(n - 1) * n;
    }
}
console.log(factorial(8));
/* Mantığı
return --> factorial(4) * 5
       --> factorial(3) * 4
       --> factorial(2) * 3
       --> factorial(1) * 2
       --> factorial(0) * 1
*/

let number = 0;
while (number <= 12){
    console.log(number);
    number = number +2;
}

let result = 1;
let counter = 0;
while (counter < 10){
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

if (false != true){
    console.log("There you are")
    if (1 < 2)
        console.log("I think you got it")
}


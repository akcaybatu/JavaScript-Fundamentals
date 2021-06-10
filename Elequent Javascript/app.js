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
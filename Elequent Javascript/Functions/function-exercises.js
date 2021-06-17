// Min value
function min(num1, num2){
    console.log(Math.min(num1, num2));
}
min(1,2);

// Recursion even and odd
function isEven(num) {
    if (num == 0){
        return true;
    }
    else if (num == 1){
        return false;
    }
    else if (num < 0){
        return isEven(num + 2);
    }
    else{ 
        return isEven(num - 2);
    }
}
console.log(isEven(-50));

//Bean Counting
function countBs(bean){
    let n = 0;    
    for (let a = 0; a < bean.length; a++){
        if (bean[a] == "B"){
            n += 1;
        }
    }    
    console.log(n);
}
countBs("BaBaBa");

function countChar(beanny, letter){
    let m = 0;    
    for (let b = 0; b < beanny.length; b++){
        if (beanny[b] == `${letter}`){
            m += 1;
        }
    }    
    console.log(m);
}
countChar("BaBaBaaaaaa", "a");
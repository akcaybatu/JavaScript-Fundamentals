function sayHello(){
    console.log("Hello")
}
sayHello();


function sayHelloWithName(name){
    console.log("Hello " + name)
}
sayHelloWithName('Mark');


function f(x, y){
    return 2*x + 5*y + 5;
}
result = f(1, 2);
console.log(result);









function random(number) {
    return Math.floor(Math.random()*number);
}
console.log(random(10));




function yasKontrolu(yas) {
    return (yas > 18) || confirm("Ebeveynlerin izin verdi mi?");
}
yasKontrolu(20);

function yasKontroluYeni(yasYeni){
    return (yasYeni > 18) ? true : confirm("Ebeveynlerin izin verdimi?");
}
yasKontroluYeni(20); // terminalde false kısmını çalıştırmaz.


function pow(x, n) {
    let result = x;  
    for (let index = 1; index < n; index++) {
        result *= x;    
    }
    return result;
}
pow(3, 3);

















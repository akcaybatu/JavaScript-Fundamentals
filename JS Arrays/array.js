let myValues = [1, 2, 3, null, true, "Merhaba"];

let value = myValues[2];

console.log(myValues[5]);
console.log(value);

myValues[3] = 123; // normalde olduğu gibi değerini değiştirebilirsin.
console.log(myValues[3]);

console.log(myValues.length);
console.log(myValues[myValues.length-1]); // sonuncu elemanı bulmak için.


for(let i = 0; i < myValues.length; i++){ // tüm elemanları yazdırmak için for döngüsü kullanılabilir.
    console.log(myValues[i])
}
// ilk sayıyı al
let number = 10;
// işlemi al (toplama, çıkarma, çarpma, bölme)
let operation = "topla"; //Operation değerini değiştirerek sonuçları görebilirsin.
// ikinci sayıyı al
let number2 = 5;

let result;

// eğer işlem toplama ise:
if(operation == "topla"){
    // iki sayıyı topla
    result = number + number2;
}
// eğer işlem çıkarma ise:
else if(operation == "çıkar"){
    // ikinci sayıyı ilk sayıdan çıkar
    result = number - number2;
}
// eğer işlem çarmpa ise:
else if(operation == "çarp"){
    // iki sayıyı çarp
    result = number * number2;
}
// eğer işlem bölme ise:
else if(operation == "böl"){
    // eğer ikinci sayı sıfır ise:
    if(number2 == 0){
        // hata göster
        result = "Sıfıra bölünemez";
    }
    // değilse:
    else
        result = number / number2;
        // iki sayıyı böl
    }
else if(operation == "faktöriyel"){
    let acc = 1;
    for(let i = number; i >= 1; i--){
        acc = acc * i;
    result = acc;
    }    
}
//Diğer tüm durumlarda geçersiz işlem gir:
else{
    result = "Geçersiz işlem"
}
// sonucu böl

console.log(result);
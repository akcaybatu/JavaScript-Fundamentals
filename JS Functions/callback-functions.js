// function sor(soru, evet, hayır){
//     if(confirm(soru))
//     evet()
//     else hayır();
// }

// function tamamGoster(){
//     alert("Kabul Ettiniz!");
// }

// function iptalGoster(){
//     alert("Reddettiniz.");
// }

// sor("Kabul Ediyor musunuz?", tamamGoster, iptalGoster);


// function sor(soru, evet, hayır){
//     if (confirm(soru))
//     evet()
//     else hayır()
// }

// sor(
//     "Kabul Ediyor musunuz?",
//     function() {alert("Kabul ettiniz!");},
//     function() {alert("Reddettiniz!");}
// );


//selamVer("Ahmet"); // hata! fakat bu satır fonksiyonun altında olsaydı çalışırdı
                           // fonksiyonlar javascript çalıştırılırken tanımlanır ve her yerde kullanılabilir
                           // buradaki gibi kullandığımızda değişken olarak tanımlandığı için çalışmaz
        //let selamVer = function(adi) {  // (*) büyü ortadan kalktı
        //alert( `Merhaba, ${adi}` );
        //};


        // buradaki gibi kullanmak doğru bir kullanım şeklidir
        //selamVer("Ahmet");
        //function selamVer(isim){
            //alert ( `Merhaba, ${isim}` );
        //}


function myFunction() {
    let months = ["Taş", "Kağıt", "Makas"];
    let random = Math.floor(Math.random() * months.length);
    if (random = 0){
        alert("Berabere");
    }
    else if(random == 1){
        alert ("Kaybettiniz");
    }
    else{
        alert ("Kazandınız");
    }
}
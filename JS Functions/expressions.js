function selamVer(){
    alert("Merhaba");
}
alert(selamVer); // eğer (selamver()) şeklinde yazarsan fonksiyonu çalıştırır. Fakat bu şekilde fonksiyon değerini verir.

function selamAl(){
    alert('Sana da Merhaba');
}
let func = selamAl;

func();
selamAl();
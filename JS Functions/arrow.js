let topla = (a, b) => a + b;
        alert (topla(1, 2));

        let carp = n => n * 2;
        alert(carp(5));

        let selamVer = () => "Merhaba";
        alert(selamVer());


        let yas = prompt("Kaç yaşındasın", 18);
        let merhaba = (yas < 18)?
            () => alert('Merhaba'):
            () => alert('Merhabalar');    
        merhaba();


        // çok satırlı fonksiyonlarda birden fazla satır yazılabilir
        let toplam = (a, b) => {
            let sonuc = a + b;
            return sonuc;
        }
        alert(toplam(3, 4));


        function sor(soru, evet, hayır){
            if(confirm(soru)) evet()
            else hayır();
        }
        sor(
            "Kabul ediyor musunuz?",
            () => alert("Kabul ettiniz"),
            () => alert("Reddettiniz")
        );       
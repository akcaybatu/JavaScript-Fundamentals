function yasKontrolu(yas) {
    if (yas > 18) {
        return true;
    } else {
        return confirm('Ebevenylerinin izni var mı?');
    }
    }

    let yas = prompt('Kaç yaşındasın?', 18);

    if ( yasKontrolu(yas) ) {
    alert( 'İzin verildi' );
    } else {
    alert( 'Reddedildi' );
    }
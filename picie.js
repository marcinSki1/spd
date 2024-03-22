function oblicz() {

    

    let pojemnosc1 = parseFloat(document.getElementById('pojemnosc1').value);
    let cena1 = parseFloat(document.getElementById('cena1').value);

    let pojemnosc2 = parseFloat(document.getElementById('pojemnosc2').value);
    let cena2 = parseFloat(document.getElementById('cena2').value);
    
    let CenaLitr1 = cena1 / pojemnosc1;
    let CenaLitr2 = cena2 / pojemnosc2;


    if(CenaLitr1 < CenaLitr2) {
        document.getElementById('wynik').innerHTML = 'Bardziej opłaca się pierwsza';
    }
    else if(CenaLitr2 < CenaLitr1) {
        document.getElementById('wynik').innerHTML = 'Bardziej opłaca się druga';
    }
    else if(CenaLitr1 === CenaLitr2) {
        document.getElementById('wynik').innerHTML = 'Kosztują tyle samo';
    }

    
}
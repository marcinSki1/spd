function oblicz() {
    
    let osoby = parseInt(document.getElementById('osoby').value);
    let krowki = parseInt(document.getElementById('krowki').value);
    
    let wynik = krowki / osoby;
    wynik = Math.floor(wynik);

    let reszta = krowki % osoby;

    document.getElementById('wynik').innerHTML = 
    'Ilość krówek na osobę: ' + wynik + ', Zostanie: ' + reszta;
}
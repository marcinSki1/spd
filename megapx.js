function oblicz() {
    
    let szerokosc = document.getElementById('szerokosc').value;
    let wysokosc = document.getElementById('wysokosc').value;
    
    let wynik = szerokosc * wysokosc / 1000000;

    document.getElementById('wynik').innerHTML = wynik + " Mpx";
    alert(wynik + " Mpx");
}
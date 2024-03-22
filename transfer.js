function oblicz() {
    
    let rozmiar = document.getElementById('rozmiar').value;
    let predkosc = document.getElementById('predkosc').value;
    
    let wynik = rozmiar / predkosc * 8 / 60;

    document.getElementById('wynik').innerHTML = wynik.toFixed(2) + " minut";
    alert(wynik + " minut");
}
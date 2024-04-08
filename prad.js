function oblicz() {
    let type = document.getElementById('type').value;
    let czas = parseFloat(document.getElementById('czas').value);
    let watt;

    if (type === 'Komputer'){
        watt = 500;
    } else if (type === 'Pralka'){
        watt = 2000;
    } else if (type === 'Suszarka'){
        watt = 1500;
    } else if (type === 'Piekarnik'){
        watt = 2500;
    } else if (type === 'Telewizor'){
        watt = 300;
    };

    let wynik = (watt * czas) / 1000;

    document.getElementById('wynik').innerHTML = wynik + 'zł';
}
function convert() {
    const text = document.getElementById('text').value;

    let wynik = text.replaceAll('<3', '❤');
    wynik = wynik.replaceAll('#dynia', '🎃');
    wynik = wynik.replaceAll('#ryba', '🐟');
    wynik = wynik.replaceAll('#kwiat', '🌹');
    wynik = wynik.replaceAll('#sigma', '😎')

    document.getElementById('wynik').innerHTML = wynik;
}
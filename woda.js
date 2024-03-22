function suwak() {
    let temp = document.getElementById('temp').value;

    document.getElementById("opis").innerHTML = temp + " &deg;C";

    if (temp > 0 && temp < 100){
        document.getElementById('obraz').src = 'woda.png';
    }
    if (temp > 100 && temp < 300){
        document.getElementById('obraz').src = 'para.png';
    }
    if (temp > -273 && temp < 0){
        document.getElementById('obraz').src = 'lod.png';
    }
    if (temp > -300 && temp < -273){
        document.getElementById('obraz').src = 'brak.png';
    }
}
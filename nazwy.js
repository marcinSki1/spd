function generate() {
    let imie = document.getElementById('imie').value;

    let data1 = Math.floor(Math.random() * 2) + 19;
    let data2 = Math.floor(Math.random() * 99);


    let dlugosc = imie.length;
    let fl = imie.substring(0, 1).toUpperCase();
    let sl = imie.substring(imie.length-1, imie.length).toUpperCase();

    let slowa = ['Dzik', 'Szef', 'Sigma', 'Luźny'];
    let los = Math.floor(Math.random() * slowa.length);

    document.getElementById('rok').innerHTML = data1 + imie +data2;
    document.getElementById('inicjaly').innerHTML = fl + dlugosc + sl;
    document.getElementById('okreslenie').innerHTML = slowa[los] + ' ' + imie;

}
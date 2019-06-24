// Penjumlahan dari angka pertama dan angka terakhir yang diinput
// Ada berapa angka genap dan ada berapa angka ganjil ^^
// Jumlah semua angka yang diinput ^^
// Quantity dari angka 3
// Rata rata dari semua angka yang di input ^^


var ganjil = []
var genap = []
var semuaAngka = []
do{
    var input = prompt('Masukan Angka :')
    if(Number.isInteger( parseInt(input))){
        if(input % 2 ==0){
            genap.push(input) 
        if(input - 3 == 0){
            angkatiga.push(input)
        }
        }else{
            ganjil.push(input)
        }
    }
}while(Number.isInteger( parseInt(input)))
function PrintData(arr){
    var hasil = ''
    for(var i = 0 ; i < arr.length ; i++){
        hasil += arr[i] + ','
    }
    return hasil
}
var printGanjil = PrintData(ganjil)
var printGenap = PrintData(genap)
// var printangkatiga = PrintData(angkatiga)


var totalGenap = 0
for (var i = 0 ; i < genap.length ; i++){
    totalGenap += parseInt(genap[i])
}

var RatarataGenap = totalGenap/genap.length

var totalGanjil = 0
for (var i = 0 ; i < ganjil.length ; i++){
    totalGanjil += parseInt(ganjil[i])
}

var RatarataGanjil = totalGanjil/ganjil.length







var RatarataSemuaAngka = 0.5 * ( RatarataGenap + RatarataGanjil)
var JumlahSemuaAngka = totalGenap + totalGanjil


document.getElementById('hasil').innerHTML = 'Angka Ganjil = ' + printGanjil
                                            + '<br>Angka Genap = ' + printGenap 
                                            +'<br>Rata-rata Semua Angka = ' + RatarataSemuaAngka
                                            +'<br>Rata-rata Angka Genap = ' + RatarataGenap
                                            +'<br>Rata-rata Angka Ganjil = ' +  RatarataGanjil
                                            +'<br>Jumlah Semua Angka = ' + JumlahSemuaAngka
                                            +'<br>Banyaknya Angka Genap = ' + genap.length
                                            +'<br>Banyaknya Angka Ganjil = ' + ganjil.length
                                            
                                            
                                            







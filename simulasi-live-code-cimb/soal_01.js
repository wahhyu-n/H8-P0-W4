/*
============
Grocery Shop 
============

[INSTRUCTION]
Mari kita berbelanja!! 
Miku berbelanja di pasar untuk membeli kebutuhan Bulanan. 
Di pasar dijual beberapa jenis kebutuhan sebagai berikut : 
1. Beras, 1 liter seharga Rp. 10.000 
2. Ayam, 1 Potong seharga Rp. 8.000
3. Sayur, 1 ikat seharga Rp. 5000

Uang Miku terbatas, namun uang belanjaannya harus dapat membeli mulai dari barang termahal (beras) hingga termurah (sayur).
Jika uangnya masih cukup, maka Miku akan membeli barang tersebut lagi dari yang termahal hingga termurah lagi hingga uang Miku tidak lagi cukup untuk membeli.

tugas kalian adalah memunculkan detail transaksi yang dilakukan Miku dan memunculkan kembaliannya.
note: selalu lakukan pembelian dari barang termahal -> termurah

[EXAMPLE]
uang Miku Rp. 107.400 maka jumlah belanjaan Miku yang paling maksimal adalah:
"beras 5 liter, ayam 4 potong, sayur 5 ikat, kembalian Rp. 400"
kenapa? karena saat uang Miku tersisa: 15400, Miku hanya sanggup membeli beras dan sayur dengan kembalian Rp. 400



Tulis Pseudocode di sini!
Pseducode/ algoritma anda di sini
deklarasi:
set var uangMiku=107.400;
set var result=[]
set var hargaKebutuhan=[
[Beras,10000],
[Ayam,8000],
[Sayur,5000]
]

Begin
set looping increment from i=0 to i<kebutuhan.length then
set amount==1
set if(result[hargaKebutuhan[i][0]]===undefined)then
result[hargaKebutuhan[i][0]] = {
                Beras:0 ,
                Ayam:0 ,
                Sayur:0 ,
            }then

var sisauangBeras=uangMiku
if(sisauangBeras>= hargaKebutuhan[i][1]) then
sisauangBeras-=hargaKebutuhan[i][1]*amount
amount++;then
if(sisauangBeras >= hargaKebutuhan[i][2]) then
sisauangAyam-=hargaKebutuhan[i][2]*amount;
amount++;then
if(sisauangAyam >= hargaKebutuhan[i][3]) then
sisauangSayur-=hargaKebutuhan[i][3]*amount
amount++;then

result[hargaKebutuhan[i][0]].Beras += sisauangBeras then
result[hargaKebutuhan[i][0]].Ayam += sisauangAyam then
result[hargaKebutuhan[i][0]].sayur += sisauangSayur then
end loop
return result
end function
 */

function buyCalculator(uang) {
    var uangawal = uang;
    var beras = 0;
    var ayam = 0;
    var sayur = 0;
    var kembalian = 0;
    while (uang > 5000) {

        if (uang > 10000) {
            beras += 1
            uang -= 10000
        }
        if (uang > 8000) {
            ayam += 1;
            uang -= 8000
        }
        if (uang > 5000) {
            sayur += 1;
            uang -= 5000
        }
        kembalian = uang;

    }
    return "dengan jumlah uang " + uangawal + " Miku berhasil membeli " + beras + " liter beras " + ayam + " potong ayam " + sayur + " ikat sayur" + " dengan kembalian Rp." + kembalian;
}
console.log(buyCalculator(107400))

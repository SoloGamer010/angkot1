var penumpang = [];
var namaPenumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang){
    if (penumpang.length == 0){ // Untuk menghitung length sebuah data
        penumpang.push(namaPenumpang); // Untuk menambahkan data di dalam array
        return penumpang; // Untuk mengulang isi function
    } else {
        for (i=0; i<penumpang.length; i++){ // Untuk mencari ulang isi panjang data yang sudah di isi
            if (penumpang [i] == undefined){ // Jika isi kosong atau undefined
                penumpang [i] = namaPenumpang; // Mengembalikan isi array & keluar dari function
                return penumpang;

            } else if (namaPenumpang == penumpang [i]){ // Untuk mencari data yang sama yabng telah di input datanya
                console.log(namaPenumpang + ' sudah ada didalam angkot'); // Memberikan informasi data yang sama dan sudah ada
                return; // Keluar dari function

            } else if (i == penumpang.length - 1){
                penumpang.push(namaPenumpang); // Untuk menambah isi dara dalam array
                return penumpang; // Mengembalikan isi array & keluar dari function

            } if (tambahPenumpang.length == 2){
                penumpang.push(namaPenumpang); // Untuk menambah isi dara dalam array
                console.log("Penumpang sudah penuh!");
                return; // Keluar dari funtion
            }
        }
    }
}

// Menmabah penumpang =
// tambahPenumpang("Haikal", penumpang);

// Cara menghapus penumpang =
// penumpang.pop("Haikal", penumpang);
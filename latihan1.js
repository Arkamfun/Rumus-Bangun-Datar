        // struktur persegi
    // buat variabel
const listRumus = document.getElementById('listRumus');
const rumusLuas = document.getElementById('rumusLuas');
const rumusKel = document.getElementById('rumusKeliling');
const bangunDatar = document.getElementById('bangunDatar');
const tombol = document.getElementsByTagName('button');

const ket = document.getElementById('keterangan')


// membuat rumus - rumus

        // buat object menggunakan object constructor 

        function rumus(luas, keliling, keterangan){
            this.luas = luas
            this.keliling = keliling
            this.keterangan = keterangan
        }

        // const contoh = new rumus('s x s', 's x 4', 's = sisi')

const persegi = new rumus('s x s', 's x 4', 's = sisi')

const persegiPanjang = new rumus('p x l', '2 x ( p + l )','p = panjang ,<br> l = lebar')

const lingkaran = new rumus('∏ x r x r', '∏ x r x 2', 'pi = konstanta / ∏ <br> r = ruas / jari-jari' )
// const lingkaran = {
// luas : '∏ x r x r',
// keliling : '∏ x r x 2',
//     keterangan : {
//         pi : 'konstanta / ∏ ',
//         r : 'ruas / jari-jari'

//     }
// }

const segitiga = new rumus('1/2 x a x t', 'sisi A + sisi B + sisi C', 'a = tinggi <br> t = tinggi')

// const segitiga = {
// luas : '1/2 x a x t',
//     keliling : 'sisi A + sisi B + sisi C',
//     keterangan : {
//         a : 'alas',
//         t : 'tinggi'
//     }
// }

// buat DOM rumus Matematika

    // persegi

tombol[0].addEventListener('click', function() {
    rumusLuas.innerHTML = persegi.luas
    rumusKel.innerHTML = persegi.keliling
    ket.innerHTML = persegi.keterangan
    bangunDatar.classList.remove('segitiga', 'lingkaran','persegiPanjang')
    bangunDatar.classList.add('persegi')

})


// persegi Panjang
tombol[1].addEventListener('click', function(){
    rumusLuas.innerHTML = persegiPanjang.luas
    rumusKel.innerHTML = persegiPanjang.keliling
    ket.innerHTML = persegiPanjang.keterangan
    bangunDatar.classList.remove('segitiga', 'persegi', 'lingkaran')
    bangunDatar.classList.add('persegiPanjang')
})

// lingkaran
tombol[2].addEventListener('click', function(){
    rumusLuas.innerHTML = lingkaran.luas
    rumusKel.innerHTML = lingkaran.keliling
    ket.innerHTML = lingkaran.keterangan
    bangunDatar.classList.remove('persegi','persegiPanjang', 'segitiga')
    bangunDatar.classList.add('lingkaran')
})

// segitiga
tombol[3].addEventListener('click', function() {
    rumusLuas.innerHTML = segitiga.luas
    rumusKel.innerHTML = segitiga.keliling
    ket.innerHTML = segitiga.keterangan
    bangunDatar.classList.remove('persegi', 'persegiPanjang','lingkaran',)
    bangunDatar.classList.add('segitiga')
})
// nightmode hehehe

const body = document.querySelector('body');
const dark = document.querySelector('#darkMode')

dark.addEventListener('click',function() {
    
    if(body.classList.contains('night') == true ) {
        body.classList.remove('night')
        dark.innerHTML = '☀️'
    } else {body.classList.add('night')
    dark.innerHTML = '🌕'}
})
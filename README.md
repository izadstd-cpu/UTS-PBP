✦ The Wedding ✦ | Celestial Aesthetic Digital Invitation

Sebuah template undangan pernikahan digital interaktif dengan tema Celestial Aesthetic (Crimson & Gold). Dibangun menggunakan HTML, CSS, dan Vanilla JavaScript murni tanpa framework tambahan.

Proyek ini menghadirkan desain elegan bergaya glassmorphism, animasi latar belakang rasi bintang (canvas), pemutar musik latar, dan fitur RSVP dinamis.

✨ Fitur Utama

Personalisasi Nama Tamu: Nama tamu dapat diubah secara dinamis melalui parameter URL (contoh: ?to=Nama+Tamu).

Celestial Canvas Animation: Latar belakang interaktif yang menampilkan bintang berkedip (twinkling stars) dan bintang jatuh (shooting stars) menggunakan HTML5 Canvas secara real-time.

Background Music Player: Tombol kontrol musik floating untuk memutar atau menjeda lagu pengiring (otomatis diputar saat undangan dibuka).

Real-time Countdown Timer: Penghitung waktu mundur menuju hari pernikahan.

Add to Google Calendar: Tombol pintar untuk menyimpan jadwal acara langsung ke kalender tamu.

Digital Gift (Tanda Kasih): Fitur salin nomor rekening ke clipboard dengan notifikasi toast yang elegan.

Dynamic RSVP & Wishes Feed: Formulir ucapan dan konfirmasi kehadiran, di mana pesan yang dikirim akan langsung muncul di feed ucapan secara real-time.

🎨 Rincian Desain & Aset Proyek

Palet Warna: Menggunakan gradasi Crimson (Merah Gelap #B61924 hingga #4a0409) sebagai latar belakang, dipadukan dengan aksen Sunflower/Gold (#FFD260) untuk kesan elegan dan mewah.

Tipografi: Memadukan font Google: Cinzel (Heading utama), Cormorant Garamond (Teks serif elegan), dan Plus Jakarta Sans (Teks paragraf agar mudah dibaca).

Aset Media Lokal:

Audio: FSTVLST - Opus.mp3

Foto Mempelai Pria: prflcwk.jpg

Foto Mempelai Wanita: profilwnt.png

Ikon: Menggunakan FontAwesome (v6.4.0).

🚀 Teknologi yang Digunakan

HTML5: Struktur semantik halaman.

CSS3: Styling (Flexbox, CSS Grid), Glassmorphism UI, Animasi Keyframes.

JavaScript (ES6): Manipulasi DOM, penanganan Event, Canvas API, dan logika fungsional.

🛠️ Instalasi & Penggunaan Lokal

Karena proyek ini hanya menggunakan HTML, CSS, dan JS murni, Anda tidak perlu menginstal dependensi apa pun (seperti Node.js atau npm).

Clone repositori ini:

git clone https://github.com/username-anda/repo-undangan.git


Buka folder proyek.

Jalankan file index.html di browser Anda (Anda juga bisa menggunakan ekstensi Live Server di VS Code untuk pengalaman yang lebih baik).

Mengatur Nama Tamu Spesifik

Untuk mengirim undangan ke tamu tertentu, tambahkan parameter ?to= di akhir URL Anda.
Contoh: https://domain-anda.com/?to=Bapak%20Budi%20Santoso

🌐 Panduan Deploy ke GitHub Pages (Hosting Gratis)

Agar undangan ini bisa diakses secara live melalui internet, Anda bisa menggunakan fitur GitHub Pages.

Langkah 1: Ubah Visibilitas ke Public (Jika masih Private)

Buka tab Settings di repositori Anda.

Gulir ke bawah hingga bagian Danger Zone.

Klik Change repository visibility, pilih Change to public, lalu ikuti konfirmasinya.

Langkah 2: Aktifkan GitHub Pages

Pastikan file index.html, style.css, script.js, dan semua aset gambar/audio berada di halaman paling depan repositori (bukan di dalam folder tambahan).

Buka tab Settings > Pilih menu Pages di sebelah kiri.

Pada bagian Build and deployment, atur Source ke Deploy from a branch.

Pilih branch main dan folder /(root), lalu klik Save.

Tunggu sekitar 1-5 menit. Refresh halaman, tautan website Anda akan muncul di bagian atas (contoh: https://username.github.io/nama-repo/).

⚠️ Troubleshooting (Jika terjadi Error / Tanda Silang Merah)

Jika Anda melihat tanda silang merah (X) pada status commit atau pesan "Some checks were not successful / cancelled":

Ini biasanya terjadi karena Anda melakukan pembaruan kode secara berturut-turut dalam waktu cepat, sehingga GitHub membatalkan proses build lama.

Solusi: Buka tab Actions, cek workflow bernama pages build and deployment. Pastikan proses yang paling atas memiliki tanda centang hijau. Jika sudah hijau, website Anda sudah berhasil di-publish.

🖌️ Panduan Kustomisasi (Customization)

Anda dapat menggunakan template ini untuk pernikahan Anda sendiri dengan mengubah beberapa bagian berikut:

1. Mengubah Data Mempelai & Tanggal

Buka index.html.

Cari teks "Izad Emil Laahut" dan "Seseorang", lalu ganti dengan nama Anda dan pasangan.

Ganti file prflcwk.jpg dan profilwnt.png dengan foto Anda sendiri (pastikan nama file di HTML ikut disesuaikan).

2. Mengubah Tanggal Countdown

Buka script.js.

Cari baris kode berikut:

const weddingDate = new Date("2026-12-12T08:00:00").getTime();


Ubah waktu sesuai format YYYY-MM-DDTHH:MM:SS.

3. Mengubah Musik

Unggah file mp3 Anda ke dalam repositori ini.

Buka index.html dan ubah nama file pada atribut src di tag <audio>:

<source src="nama-lagu-anda.mp3" type="audio/mpeg">


4. Mengubah Data Rekening (Digital Gift)

Buka index.html pada bagian <section class="section gift-section">.

Ganti teks nomor rekening dan nama bank yang tampil.

Ubah juga argumen pada fungsi salinNomor() agar tombol copy berfungsi dengan benar:

<button class="btn-salin" onclick="salinNomor('NOMOR_REK_BARU', 'NAMA_BANK')">


📝 Catatan Penting

Formulir RSVP pada template ini saat ini hanya berjalan di sisi client (menggunakan array JavaScript lokal). Jika halaman dimuat ulang, data ucapan baru akan hilang. Untuk penggunaan produksi yang sebenarnya, Anda perlu mengintegrasikannya dengan layanan backend (seperti Google Sheets API, Firebase, atau Formspree) di dalam fungsi handleFormSubmit(event) pada file script.js.

📄 Lisensi

Proyek ini bersifat Open-Source. Anda bebas memodifikasi dan menggunakannya untuk keperluan pribadi.

Didesain dengan sepenuh hati oleh [@izdstd]

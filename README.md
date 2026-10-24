✦ The Wedding  ✦ | Celestial Aesthetic Digital Invitation

Sebuah template undangan pernikahan digital interaktif dengan tema Celestial Aesthetic (Crimson & Gold). Dibangun menggunakan HTML, CSS, dan Vanilla JavaScript murni tanpa framework tambahan.

Proyek ini menghadirkan desain elegan bergaya glassmorphism, animasi latar belakang rasi bintang (canvas), pemutar musik latar, dan fitur RSVP dinamis.

✨ Fitur Utama

Personalisasi Nama Tamu: Nama tamu dapat diubah secara dinamis melalui parameter URL (contoh: ?to=Nama+Tamu).

Celestial Canvas Animation: Latar belakang interaktif yang menampilkan bintang berkedip (twinkling stars) dan bintang jatuh (shooting stars) menggunakan HTML5 Canvas.

Background Music Player: Tombol kontrol musik floating untuk memutar atau menjeda lagu pengiring (otomatis diputar saat undangan dibuka).

Real-time Countdown Timer: Penghitung waktu mundur menuju hari pernikahan.

Add to Google Calendar: Tombol pintar untuk menyimpan jadwal acara langsung ke kalender tamu.

Digital Gift (Tanda Kasih): Fitur salin nomor rekening ke clipboard dengan notifikasi toast yang elegan.

Dynamic RSVP & Wishes Feed: Formulir ucapan dan konfirmasi kehadiran, di mana pesan yang dikirim akan langsung muncul di feed ucapan secara real-time (disimpan di memori lokal/DOM).

Responsive Design: Tampilan dioptimalkan untuk perangkat mobile maupun desktop.

🚀 Teknologi yang Digunakan

HTML5: Struktur semantik halaman.

CSS3: Styling (Flexbox, CSS Grid), Glassmorphism UI, Animasi Keyframes.

JavaScript (ES6): Manipulasi DOM, penanganan Event, Canvas API, dan logika fungsional.

Google Fonts: Menggunakan Cinzel, Cormorant Garamond, dan Plus Jakarta Sans.

FontAwesome: Ikon vektor (v6.4.0).

🛠️ Instalasi & Penggunaan

Karena proyek ini hanya menggunakan HTML, CSS, dan JS murni, Anda tidak perlu menginstal dependensi apa pun (seperti Node.js atau npm).

Clone repositori ini:

git clone https://github.com/username-anda/repo-undangan.git


Buka folder proyek.

Jalankan file index.html di browser Anda (Anda juga bisa menggunakan ekstensi Live Server di VS Code untuk pengalaman yang lebih baik).

Mengatur Nama Tamu Spesifik

Untuk mengirim undangan ke tamu tertentu, tambahkan parameter ?to= di akhir URL Anda.
Contoh:
https://domain-anda.com/?to=Bapak%20Budi%20Santoso

🎨 Panduan Kustomisasi (Customization)

Anda dapat menggunakan template ini untuk pernikahan Anda sendiri dengan mengubah beberapa bagian berikut:

1. Mengubah Data Mempelai & Tanggal

Buka index.html.

Cari teks "Izad Emil Laahut" dan "Seseorang", lalu ganti dengan nama Anda dan pasangan.

Ganti link foto prflcwk.jpg dan profilwnt.png dengan foto Anda sendiri.

2. Mengubah Tanggal Countdown

Buka script.js.

Cari baris kode berikut (sekitar baris ke-54):

const weddingDate = new Date("2026-12-12T08:00:00").getTime();


Ubah 2026-12-12T08:00:00 sesuai dengan format YYYY-MM-DDTHH:MM:SS.

3. Mengubah Musik

Letakkan file mp3 Anda di folder root.

Buka index.html dan ubah atribut src pada tag <audio>:

<source src="nama-lagu-anda.mp3" type="audio/mpeg">


4. Mengubah Data Rekening

Buka index.html pada bagian <section class="section gift-section">.

Ganti teks nomor rekening dan nama bank.

Pastikan juga untuk mengubah parameter pada fungsi salinNomor():

<button class="btn-salin" onclick="salinNomor('NOMOR_REK_BARU', 'NAMA_BANK')">


📝 Catatan Penting

Formulir RSVP pada template ini saat ini hanya berjalan di sisi client (menggunakan array JavaScript lokal). Jika halaman dimuat ulang, data ucapan baru akan hilang. Untuk penggunaan produksi yang sebenarnya, Anda perlu mengintegrasikannya dengan backend (seperti Google Sheets API, Firebase, atau database pilihan Anda) di dalam fungsi handleFormSubmit(event) pada file script.js.

📄 Lisensi

Proyek ini bersifat Open-Source. Anda bebas memodifikasi dan menggunakannya untuk keperluan pribadi.

Didesain dengan sepenuh hati oleh [@izdstd]


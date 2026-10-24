// 1. URL QUERY PARAMETER: PERSONALISASI NAMA TAMU (?to=Nama+Tamu)
const urlParams = new URLSearchParams(window.location.search);
const namaTamuParam = urlParams.get('to');
const guestRecipientEl = document.getElementById('guestRecipient');

if (namaTamuParam) {
  guestRecipientEl.textContent = decodeURIComponent(namaTamuParam);
}

// 2. DATA BUKU TAMU: ARRAY OF OBJECTS
let daftarUcapan = [
  {
    nama: "Sirin Farid Stevy",
    status: "✨ Pasti Hadir",
    pesan: "Selamat menempuh hidup baru Izad dan Seseorang. Semoga menjadi keluarga sakinah, mawaddah, warahmah serta senantiasa dilimpahi keberkahan dan kebahagiaan.",
    waktu: "1 jam yang lalu"
  },
  {
    nama: "Amir Mantis",
    status: "✨ Pasti Hadir",
    pesan: "Happy Wedding Mbak - & Mas Izad! Masya Allah cantiknya. Semoga selalu rukun, bahagia sampai kakek nenek!",
    waktu: "3 jam yang lalu"
  },
  {
    nama: "Maul Ibrahim",
    status: "⏳ Masih Menyesuaikan",
    pesan: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khoir. Lancar sampai hari H sahabatku!",
    waktu: "Kemarin"
  },
  {
    nama: "Gus Jiwe",
    status: "⏳ Masih Menyesuaikan",
    pesan: "Happy wedding! Akhirnya momen yang ditunggu-tunggu datang juga. Semoga langgeng terus, bahagia sampai kakek nenek, dan lancar rezekinya ya.",
    waktu: "1 jam yang lalu"
  }
];

// 3. ELEMEN DOM UTAMA
const coverOverlay = document.getElementById('coverOverlay');
const mainContent = document.getElementById('mainContent');
const btnOpen = document.getElementById('btnOpen');
const bgAudio = document.getElementById('bgAudio');
const musicToggle = document.getElementById('musicToggle');
const wishesContainer = document.getElementById('wishesContainer');
const countWishes = document.getElementById('countWishes');
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');

// 4. EVENT: BUKA UNDANGAN (OPEN INVITATION)
btnOpen.addEventListener('click', () => {
  // Transisi memudarkan cover overlay
  coverOverlay.classList.add('fade-out');

  // Menampilkan konten utama & tombol kontrol musik
  mainContent.classList.remove('hidden');
  musicToggle.style.display = 'flex';

  // Otomatis memutar instrumen piano romantis
  bgAudio.play().catch(err => {
    console.log("Audio autoplay dicegah browser:", err);
  });
});

// Kontrol Musik Play / Pause
musicToggle.addEventListener('click', () => {
  if (bgAudio.paused) {
    bgAudio.play();
    musicToggle.classList.remove('paused');
  } else {
    bgAudio.pause();
    musicToggle.classList.add('paused');
  }
});

// 5. COUNTDOWN TIMER REAL-TIME (setInterval & new Date)
const weddingDate = new Date("2026-12-12T08:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  } else {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 6. RENDER UCAPAN KE DOM (Array.forEach & createElement)
function renderWishes() {
  wishesContainer.innerHTML = '';
  countWishes.textContent = daftarUcapan.length;

  daftarUcapan.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('wish-box');

    card.innerHTML = `
      <div class="wish-top">
        <span class="wish-sender">✦ ${escapeHTML(item.nama)}</span>
        <span class="wish-status-badge">${item.status}</span>
      </div>
      <p class="wish-message">${escapeHTML(item.pesan)}</p>
      <span class="wish-timestamp"><i class="fa-regular fa-clock"></i> ${item.waktu}</span>
    `;

    wishesContainer.appendChild(card);
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Inisialisasi awal ucapan
renderWishes();

// 7. FORM VALIDATION & SUBMISSION
function handleFormSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById('namaTamu').value.trim();
  const status = document.getElementById('statusKehadiran').value;
  const pesan = document.getElementById('pesanUcapan').value.trim();

  // Validasi: Pastikan input tidak kosong
  if (nama === "") {
    alert("Mohon masukkan nama lengkap Anda.");
    document.getElementById('namaTamu').focus();
    return false;
  }

  if (pesan === "") {
    alert("Mohon tuliskan ucapan atau doa restu Anda.");
    document.getElementById('pesanUcapan').focus();
    return false;
  }

  // Tambahkan ucapan baru ke awal array
  const wishBaru = {
    nama: nama,
    status: status,
    pesan: pesan,
    waktu: "Baru saja"
  };

  daftarUcapan.unshift(wishBaru);
  renderWishes();

  // Reset formulir
  document.getElementById('rsvpForm').reset();

  alert("Terima kasih banyak atas konfirmasi dan doa tulus Anda, " + nama + "!");
  return true;
}

// 8. SALIN NOMOR REKENING DENGAN TOAST (setTimeout)
function salinNomor(rekening, bankName) {
  navigator.clipboard.writeText(rekening).then(() => {
    toastMessage.textContent = `Nomor rekening ${bankName} berhasil disalin!`;
    toastNotification.classList.remove('hidden');

    setTimeout(() => {
      toastNotification.classList.add('hidden');
    }, 2500);
  }).catch(() => {
    alert("Nomor rekening: " + rekening);
  });
}

// 9. SIMPAN KE GOOGLE CALENDAR
function saveToCalendar() {
  const title = encodeURIComponent("The Wedding of Izad & -");
  const details = encodeURIComponent("Pernikahan Izad Emil Laahut & - di Exora View Hotel & Suite by Exindo 57 Nganjuk");
  const location = encodeURIComponent("Exora View Hotel & Suite by Exindo 57 Nganjuk");
  const dates = "20310831T010000Z/20310831T070000Z"; // 08:00 - 14:00 WIB (UTC+7)
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  window.open(gcalUrl, '_blank');
}

// 10. AESTHETIC CANVAS: TWINKLING STARS & SHOOTING STARS
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
let shootingStars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Class Bintang Berkedip (Twinkling Star)
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random();
    this.speed = Math.random() * 0.02 + 0.005;
  }

  update() {
    this.alpha += this.speed;
    if (this.alpha > 1 || this.alpha < 0.2) {
      this.speed = -this.speed;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(246, 224, 156, ${this.alpha})`;
    ctx.shadowBlur = 4;
    ctx.shadowColor = '#d4af37';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

// Class Bintang Jatuh (Shooting Star)
class ShootingStar {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * (canvas.height / 2);
    this.length = Math.random() * 80 + 40;
    this.speed = Math.random() * 4 + 4;
    this.angle = Math.PI / 4; // Sudut 45 derajat
    this.opacity = 1;
    this.active = false;
  }

  trigger() {
    this.active = true;
    this.x = Math.random() * canvas.width * 0.8;
    this.y = Math.random() * (canvas.height * 0.4);
    this.opacity = 1;
  }

  update() {
    if (!this.active) return;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.opacity -= 0.015;

    if (this.opacity <= 0) {
      this.active = false;
    }
  }

  draw() {
    if (!this.active) return;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    );
    const grad = ctx.createLinearGradient(
      this.x, this.y,
      this.x - Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    );
    grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
    grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

// Inisialisasi 90 bintang berkedip
for (let i = 0; i < 90; i++) {
  stars.push(new Star());
}

// Inisialisasi bintang jatuh
const shootingStar = new ShootingStar();
setInterval(() => {
  if (!shootingStar.active && Math.random() > 0.4) {
    shootingStar.trigger();
  }
}, 4000);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  shootingStar.update();
  shootingStar.draw();

  requestAnimationFrame(animate);
}

animate();

// Tombol "Hubungi Saya" di hero section
document.getElementById('hireBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Form kontak (simulasi kirim pesan)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    alert(`Terima kasih, ${name}! Pesanmu telah terkirim.`);
    e.target.reset();
});

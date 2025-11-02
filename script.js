// Animasi scroll (reveal)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('active');
  });
});

// Dark / Light mode
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Form kontak
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Terima kasih, ${name}! Pesan kamu sudah dikirim 🚀`);
  e.target.reset();
});

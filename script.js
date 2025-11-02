// Efek mengetik di hero
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "UI/UX Designer", "Frontend Enthusiast"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
    currentWord = words[i];
    typingText.textContent = isDeleting
        ? currentWord.substring(0, j--)
        : currentWord.substring(0, j++);

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 200);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
type();

// Scroll animation
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
    fadeEls.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Mode gelap/terang
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Form kontak
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Terima kasih, ${name}! Pesanmu sudah terkirim 🚀`);
    e.target.reset();
});

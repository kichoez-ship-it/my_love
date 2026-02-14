// Carrusel
const slides = document.querySelectorAll('.slide');
let current = 0;

// Música
const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');

// Cambiar slides automáticamente
setInterval(() => {

    // Pausar y reiniciar videos
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });

    // Quitar slide activo
    slides[current].classList.remove('active');

    // Siguiente slide
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');

    // Reproducir video si existe
    const activeVideo = slides[current].querySelector('video');
    if (activeVideo) {
        activeVideo.play();
    }

}, 6000); // cambia cada 6 segundos

// Control de música
musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = '⏸️ Pausar';
    } else {
        music.pause();
        musicBtn.textContent = '▶️ Música';
    }
});

/* ===============================
   💕 CORAZONES ANIMADOS
   =============================== */

const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (16 + Math.random() * 24) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 6) + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

// Crear corazones cada 500ms
setInterval(createHeart, 500);

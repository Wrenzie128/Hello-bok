const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const pictures = document.querySelectorAll('.pictures img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');
const caption = document.getElementById('caption');

 // Picture click opens modal
    pictures.forEach(pic => {
        pic.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = pic.src;
            caption.textContent = pic.alt;
        });
    });

// No button moves randomly, stays inside viewport
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Yes button click
yesBtn.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('finalScreen').classList.add('show');
});





// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Click outside modal closes it
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
// Falling hearts generator
const hearts = ['💗','💖','💞','💕','❤️‍🔥'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.fontSize = (16 + Math.random() * 18) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}
const noTexts = [
    "Nice try 😌",
    "Wrong answer",
    "Be serious",
    "Don’t lie",
    "You love me",
    "That’s illegal"
];

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
});


// Create hearts continuously
setInterval(createHeart, 300);
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

let isPlaying = false;

// gentle fade in
function fadeInMusic() {
    music.volume = 0;
    music.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.5) {
            vol += 0.02;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

musicToggle.addEventListener('click', () => {
    if (!isPlaying) {
        fadeInMusic();
        musicToggle.textContent = '💞';
    } else {
        music.pause();
        musicToggle.textContent = '💗';
    }
    isPlaying = !isPlaying;
});

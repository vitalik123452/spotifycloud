const audio = document.getElementById('audio');
const currentTrack = document.getElementById('current-track');
const playPauseBtn = document.getElementById('playPause');
const cards = document.querySelectorAll('.playlist-card');
let currentSrc = '';

cards.forEach(card => {
    card.addEventListener('click', () => {
        const src = card.getAttribute('data-src');
        const title = card.querySelector('h3').textContent;

        if (src !== currentSrc) {
            currentSrc = src;
            audio.src = src;
            currentTrack.textContent = 'Зараз грає: ' + title;
            audio.play();
            playPauseBtn.textContent = '⏸️ Пауза';
        }
    });
});

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️ Пауза';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️ Відтворити';
    }
});
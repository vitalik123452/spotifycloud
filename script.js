const playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playBtn.textContent = "⏸️ Пауза";
        playBtn.classList.add("playing");
        console.log("Музика грає (симуляція)");
    } else {
        playBtn.textContent = "▶️ Відтворити";
        playBtn.classList.remove("playing");
        console.log("Музика на паузі (симуляція)");
    }
});
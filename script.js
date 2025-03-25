document.getElementById("playMusic").addEventListener("click", function() {
    let audio = document.getElementById("backgroundMusic");

    if (audio.paused) {
        audio.play().catch(error => console.log("Ошибка воспроизведения: ", error));
    } else {
        audio.pause();
        audio.currentTime = 0; // Сбрасываем в начало
    }
});

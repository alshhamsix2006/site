const musicButton = document.getElementById('musicButton');
const musicIcon = document.getElementById('musicIcon');
const audioPlayer = document.getElementById('audioPlayer');

musicButton.addEventListener('click', function() {
    musicIcon.classList.add('shake');
            
    setTimeout(() => {
        musicIcon.classList.remove('shake');
    }, 500);
            
if (audioPlayer.paused) {
    audioPlayer.play();
    musicIcon.src = "button/1.png";
    } else {
    audioPlayer.pause();
    musicIcon.src = "button/2.png";
    }
});
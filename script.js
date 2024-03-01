let audio = document.getElementById("bgMusic");
audio.volume = 0.3;
let playIcon = "./assets/icons/play.svg";
let pauseIcon = "./assets/icons/pause.svg";
let btn = document.getElementById("playButton");
function changeIcon() {
    let curr = btn.src.includes("pause");
    if (curr) {
        btn.src = playIcon;
        audio.pause();
    } else {
        btn.src = pauseIcon;
        audio.play();
    }
}
btn.onclick = changeIcon;
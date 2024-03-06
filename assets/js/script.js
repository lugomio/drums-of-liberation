window.addEventListener("keydown", play);
const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeActive);
    key.addEventListener("click", play);
});

function removeActive(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove("active");
}

function play(e) {
    let data;

    if(e.type === "click"){
        data = e.target.dataset.key;
    } else{
        data = e.keyCode;
    }

    const key = document.querySelector(`div[data-key="${data}"]`);
    const audio = document.querySelector(`audio[data-key="${data}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("active");
}
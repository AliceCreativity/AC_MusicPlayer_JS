const player = document.getElementById("player");

const spinnerContainer = document.getElementById("spinnerContainer");
const spinner = document.getElementById("spinner");

const btnPlay = document.getElementById("btnPlay");
const btnStop = document.getElementById("btnStop");
const btnPause = document.getElementById("btnPause");

btnPlay.innerHTML = "Start <i class=\"fa-solid fa-play\"></i>";

/* PLAY */

btnPlay.addEventListener('click', () => 
{
    /* pulsante Play */

    btnPlay.innerHTML = "Play  <i class=\"fa-solid fa-play\"></i>";
}, 
{ once: true }) // scatta solo la prima volta, poi non viene più eseguita

btnPlay.addEventListener('click', () => 
{
    /* pulsanti */

    btnPlay.style.cursor = "default";
    btnStop.style.cursor = "pointer";
    btnPause.style.cursor = "pointer";

    btnPlay.classList.add("btn-outline-dark");
    btnPlay.classList.remove("btn-dark");

    btnStop.classList.remove("btn-outline-dark");
    btnStop.classList.add("btn-dark");
    btnStop.disabled = false;

    btnPause.classList.remove("btn-outline-dark");
    btnPause.classList.add("btn-dark");
    btnPause.disabled = false;

    /* spinner */
    
    spinnerContainer.classList.add("rotate");

    /* player */

    player.play();
})

/* STOP */

btnStop.addEventListener('click', () => 
{
    /* pulsanti */

    btnStop.style.cursor = "default";
    btnPlay.style.cursor = "pointer";
    btnPause.style.cursor = "default";

    btnStop.classList.add("btn-outline-dark");
    btnStop.classList.remove("btn-dark");

    btnPlay.classList.remove("btn-outline-dark");
    btnPlay.classList.add("btn-dark");

    btnPause.classList.remove("btn-outline-dark");
    btnPause.classList.add("btn-dark");
    btnPause.disabled = true;
    
    spinnerContainer.classList.remove("rotate");  

    /* player */

    player.pause();
    player.currentTime = 0; 
})

/* PAUSE */

btnPause.addEventListener('click', () => 
{
    /* pulsanti */

    btnPause.style.cursor = "default";
    btnPlay.style.cursor = "pointer";
    btnStop.style.cursor = "default";

    btnPause.classList.add("btn-outline-dark");
    btnPause.classList.remove("btn-dark");

    btnPlay.classList.remove("btn-outline-dark");
    btnPlay.classList.add("btn-dark");

    btnStop.classList.remove("btn-outline-dark");
    btnStop.classList.add("btn-dark");
    btnStop.disabled = true;

    /* spinner */
    
    spinnerContainer.classList.remove("rotate");  

    /* player */

    player.pause();
})
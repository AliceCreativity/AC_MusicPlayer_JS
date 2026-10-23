const player = document.getElementById("player");

const spinnerContainer = document.getElementById("spinnerContainer");
const spinner = document.getElementById("spinner");

const btnPlay = document.getElementById("btnPlay");
const btnStop = document.getElementById("btnStop");
const btnPause = document.getElementById("btnPause");

function playMusic()
{
    /* pulsanti */

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
}

function stopMusic() 
{
    /* pulsanti */

    btnStop.classList.add("btn-outline-dark");
    btnStop.classList.remove("btn-dark");

    btnPlay.classList.remove("btn-outline-dark");
    btnPlay.classList.add("btn-dark");

    btnPause.classList.remove("btn-outline-dark");
    btnPause.classList.add("btn-dark");
    btnPause.disabled = true;

    /* spinner */

    /*spinnerContainer.style.setProperty("--bs-spinner-animation-speed", "8s");

    setTimeout(function() {
        spinnerContainer.style.setProperty("--bs-spinner-animation-speed", "12s");
    }, 1000);

    setTimeout(function() {
        spinnerContainer.style.setProperty("--bs-spinner-animation-speed", "16s");
    }, 2000);

    setTimeout(function() {
        spinnerContainer.style.transition = "opacity 0.5s ease-out";
        spinnerContainer.style.opacity = "0";
    }, 3000);

    setTimeout(function() {
        spinnerContainer.classList.remove("spinner-border");
        spinnerContainer.style.transition = "opacity 0.5s ease-in";
        spinnerContainer.style.opacity = "1";
    }, 4000);*/
    
    spinnerContainer.classList.remove("rotate");  

    /* player */

    player.pause();
    player.currentTime = 0; 
}

function pauseMusic() 
{
    /* pulsanti */

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
}
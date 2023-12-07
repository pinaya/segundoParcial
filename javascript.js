function toggleMenu() {
    var navUl = document.querySelector('.nav ul');
    navUl.style.display = (navUl.style.display === 'flex' || navUl.style.display === '') ? 'none' : 'flex';
}

//reloj

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = getCurrentTime();
    }
}

setInterval(updateClock, 1000);

let clickCount = 0;

function updateClickCounter() {
    const clickCounterElement = document.getElementById('click-counter');
    if (clickCounterElement) {
        clickCounterElement.textContent = clickCount.toString();
    }
}

function handleClick() {
    clickCount++;
    updateClickCounter();
}

document.addEventListener('click', handleClick);
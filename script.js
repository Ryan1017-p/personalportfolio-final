const introBtn = document.getElementById('introBtn');
const introMessage = document.getElementById('introMessage');

function greetVisitor() {
    const visitorName = document.getElementById('visitorName').value;

    if (visitorName === "") {
        introMessage.textContent = "Hi there! I'm Ryan — try typing your name for a personalized greeting!";
    } else {
        introMessage.textContent = `Hello, ${visitorName}! Thanks for visiting my portfolio — I'm Ryan, a BS IT student. 🚀`;
    }

    introMessage.classList.add('message-box');
}

introBtn.addEventListener('click', greetVisitor);

const welcomeOverlay = document.getElementById('welcomeOverlay');
const closeWelcome = document.getElementById('closeWelcome');

closeWelcome.addEventListener('click', () => {
    welcomeOverlay.classList.add('hidden');
});

const musicCard = document.getElementById('musicCard');
const musicPlayer = document.getElementById('musicPlayer');
const audioElement = document.getElementById('audioElement');

musicCard.addEventListener('click', () => {
    musicPlayer.classList.toggle('d-none');
    
    if (!musicPlayer.classList.contains('d-none')) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});
function revealApp() {
    document.getElementById('heart-screen').classList.add('zoom-out');
    setTimeout(() => {
        document.getElementById('heart-screen').style.display = 'none';
        document.getElementById('opening-screen').style.display = 'flex';
    }, 1000);
}

// Start the App Automatically After 5 Seconds
setTimeout(() => {
    document.getElementById('opening-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
    document.getElementById('bg-music').play();
    startTypingEffect();
}, 5000);

// Typing Effect with Photo Change
const messages = [
    "Dear Aradhana, Happy Birthday!",
    "You are the light of my life. You're the one who make my everyday a special day",
    "Every moment with you feels magical.",
    "I am so lucky to have you. ❤️🎈"
];

const images = ['Assets-photos/photo2.png', 'Assets-photos/photo3.png', 'Assets-photos/photo4.png', 'Assets-photos/photo1.png'];
let messageIndex = 0;
let charIndex = 0;
const messageDiv = document.getElementById('message');
const slideshow = document.getElementById('slideshow');

function startTypingEffect() {
    if (messageIndex < messages.length) {
        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.src = images[messageIndex % images.length];
            slideshow.style.opacity = 1;
        }, 1000);

        charIndex = 0;
        messageDiv.innerHTML = '';
        typeCharacter();
    }
}

function typeCharacter() {
    if (charIndex < messages[messageIndex].length) {
        messageDiv.innerHTML += messages[messageIndex][charIndex];
        charIndex++;
        setTimeout(typeCharacter, 100);
    } else {
        messageIndex++;
        setTimeout(startTypingEffect, 2000);
    }
}
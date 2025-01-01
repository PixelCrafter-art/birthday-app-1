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
    "I want to take a moment to remind you how much you mean to me.",
    "You're always there for me, no matter what—whether I'm in a good mood or not, ❤️🎈",
    "I love you more than words can express, and I'm so thankful to have you in my life.",
    "you always find a way to support me.",
    "Even when I tell you not to talk, you always know how to make me feel understood and cared for.",
    "Your kindness, patience, and love have brought so much joy into my life",
    "and I'm so grateful to have you by my side.",
    "Every day with you feels like a beautiful gift, and I cherish all the moments we’ve shared.",
    "Your love gives me strength and fills my heart with warmth.",
    "You've shown me the true meaning of unconditional support",
    "and I can never thank you enough for being my rock, my comfort, and my best friend.",
    "I hope today brings you all the happiness you deserve. I love you more than words can express!",
];

const images = ['Assets-photos/photo1.png','Assets-photos/photo2.png', 'Assets-photos/photo3.png', 'Assets-photos/photo4.png', 'Assets-photos/photo5.png', 'Assets-photos/photo6.png', 'Assets-photos/photo7.png', 'Assets-photos/photo8.png', 'Assets-photos/photo9.png', 'Assets-photos/photo10.png', 'Assets-photos/photo11.png', 'Assets-photos/photo12.png', 'Assets-photos/photo13.png'];
let messageIndex = 0;
let charIndex = 0;
const messageDiv = document.getElementById('message');
const slideshow = document.getElementById('slideshow');

// Modify the startTypingEffect function
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
    } else {
        // Stop the background music after the slideshow ends
        document.getElementById('bg-music').pause();
        document.getElementById('bg-music').currentTime = 0;

        // Show the button after the slideshow
        document.getElementById('action-button').classList.remove('hidden');
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
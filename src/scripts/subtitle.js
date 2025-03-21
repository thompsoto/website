const subtitles = [
    "a Full-Stack Developer",
    "a Creator",
    "a Loving Cat Dad",
    "a Thinker",
    "a Coffee Enthusiast",
];

let index = 0;

function generateSubtitle() {
    const subtitle = document.getElementById('content-subtitle');
    subtitle.textContent = subtitles[index];
    index = (index + 1) % subtitles.length;
}

document.addEventListener('DOMContentLoaded', () => {
    generateSubtitle();
    setInterval(generateSubtitle, 5000);
});
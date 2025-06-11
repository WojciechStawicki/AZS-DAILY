function open_website(url) {
    window.open(url,
    '_blank', "noopener noreferrer");
}

function updateCountdown(targetHour, elementId) {
    const now = new Date();
    const target = new Date();
    target.setHours(targetHour, 0, 0, 0);

    if (now >= target) {
        target.setDate(target.getDate() + 1);
    }

    const diff = target - now;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById(elementId).textContent =
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0');
}

// Odświeżanie dwóch liczników
setInterval(() => {
    updateCountdown(0, "countdown-0");
    updateCountdown(2, "countdown-2"); 
}, 1000);
addEventListener("DOMContentLoaded", () => {
    const infoBtn = document.getElementById('infoBtn');
    const infoBox = document.getElementById('infoBox');

    // Pokaż/ukryj info-box po kliknięciu przycisku
    infoBtn.addEventListener('click', (e) => {
        console.log("infoBtn clicked");
        e.stopPropagation(); // nie zamyka od razu
        infoBox.style.display = (infoBox.style.display === 'block') ? 'none' : 'block';
    });

    // Ukryj info-box po kliknięciu poza nim
    document.addEventListener('click', (e) => {
        if (!infoBox.contains(e.target) && e.target !== infoBtn) {
            infoBox.style.display = 'none';
        }
    });
});
window.addEventListener('DOMContentLoaded', function() {
    const imagePaths = ["1", "2", "3"];
    var lastImagePath = localStorage.getItem('lastImagePath');

    do {
        randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    } while (randomImagePath === lastImagePath) {
        localStorage.setItem('lastImagePath', randomImagePath);
        const imageUrl = "url('/images/pattern/" + randomImagePath + ".webp')";
        document.body.style.setProperty('--backgroundImage', imageUrl);
    }
});

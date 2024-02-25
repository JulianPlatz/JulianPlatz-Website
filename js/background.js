window.addEventListener('DOMContentLoaded', function() {
    const imagePaths = ["1", "2", "3"];
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const imageUrl = "url(" + '/images/pattern/' + randomImagePath + '.webp' + ")"

    document.body.style.setProperty('--backgroundImage', imageUrl);
});
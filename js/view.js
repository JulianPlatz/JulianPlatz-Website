fetch('views/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-view').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
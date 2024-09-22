document.addEventListener('DOMContentLoaded', function () {
    fetch('data/education-data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('education-cards');

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <div class="card-head">
                        <img class="card-img" src="${item.imgSrc}" alt="${item.title}-Icon">
                    </div>
                    <div class="card-body">
                        <div class="card-content">
                            <h1 class="card-title">${item.title}</h1>
                            <p class="card-text">${item.description}</p>
                        </div>
                        <div class="card-extras">
                            <button class="card-link" onclick="window.open('${item.website}', '_blank')">Website</button>
                            <span class="card-span">${item.date}</span>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching education data:', error));
});

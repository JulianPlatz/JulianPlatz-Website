document.addEventListener('DOMContentLoaded', function () {
    fetch('data/project-data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('project-accordions');

            data.forEach(item => {
                const accordion = document.createElement('div');
                accordion.classList.add('accordion');

                accordion.innerHTML = `
                    <div class="expandable-box">
                        <input type="checkbox" id="toggle${item.toggle}">
                        <label for="toggle${item.toggle}" class="label">
                            <span>${item.title}</span>
                            <i class="fa-solid fa-angle-right arrow-icon"></i>
                        </label>
                        <div class="content">
                            <p>${item.description}</p>
                            <div class="projectArticle-box">
                                <span class="projectName">${item.project}</span>
                                <span>${item.info}</span>
                                <img src="${item.image}" alt="Project-Image"</img>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(accordion);
            });

            const toggles = document.querySelectorAll('input[type="checkbox"][id^="toggle"]');

            toggles.forEach(toggle => {
                toggle.addEventListener('change', function() {
                    if (toggle.checked) {
                        toggles.forEach(otherToggle => {
                            if (otherToggle !== toggle) {
                                otherToggle.checked = false;
                            }
                        });
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});

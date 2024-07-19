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

            const toggle1 = document.getElementById('toggle1');
            const toggle2 = document.getElementById('toggle2');

            toggle1.addEventListener('change', function() {
                if (toggle1.checked && toggle2.checked) {
                    toggle2.checked = false;
                }
            });

            toggle2.addEventListener('change', function() {
                if (toggle2.checked && toggle1.checked) {
                    toggle1.checked = false;
                }
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});

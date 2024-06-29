document.addEventListener('DOMContentLoaded', function () {
    fetch('data/skill-data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('skillGrid');

            data.forEach(item => {
                const skill = document.createElement('div');
                skill.classList.add('skill');

                skill.innerHTML = `
                    <i><img src="${item.imgSrc}" alt="${item.alt}" title="${item.title}" width="48" height="auto"></i>
                `;

                container.appendChild(skill);
            });
        })
        .catch(error => console.error('Error fetching skill data:', error));
});

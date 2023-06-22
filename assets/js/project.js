let projectData = [
    {
        image: 'assets/images/icons8-dossier.svg',
        name: 'My First Portfolio',
        detail: 'My first portfolio developed using HTML5, CSS3 JS/JQuery and PHP. <br> Based on the tutorial of "Modern Web" on Patreon.com',
        github: 'https://github.com/manuvf/mavf-portfolio.git',
        tags: '#css, #javascript, #jquery, #php'
    },
    {
        image: 'assets/images/icons8-boite.svg',
        name: 'Project G-Stock',
        detail: 'On going school project. Developed with NodeJS, Bootstrap, HTML and JavaScript. ',
        github: 'https://github.com/manuvf/project-gstock',
        tags: '#nodejs, #javascript, #css, #html'
    },
    {
        image: 'assets/images/icons8-webdesign.png',
        name: 'Web Page Design',
        detail: 'My first design for a web page on basic HTML and CSS.',
        github: 'https://github.com/manuvf/webpage-design',
        tags: '#html, #css'
    },
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="assets/images/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn" target="_blank">github</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));
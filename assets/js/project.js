let projectData = [
    {
        image: 'assets/images/icons8-dossier.svg',
        name: 'My First Portfolio',
        detail: 'My first portfolio developped using HTML5, CSS3 JS/JQuery and PHP. <br> Based on the tutorial of "Modern Web" on Patreon.com',
        github: 'https://github.com/manuvf/mavf-portfolio.git',
        live: '#',
        tags: '#css, #javascript, #jquery, #php'
    },
    // {
    //     image: 'assets/images/project-2.png',
    //     name: 'project two',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#html, #javascript, #css, #php'
    // },
    // {
    //     image: 'assets/images/project-3.png',
    //     name: 'project three',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#javascript'
    // },
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
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));
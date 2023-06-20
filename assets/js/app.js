// nav toggle 

let links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active');
    })
})

// toggle navbar in mobile view
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
})

$(document).ready(function(){
    $('.project-card').click(function(){
        $(this).toggleClass('active');
    });

    
});


let projects = document.querySelectorAll('.project-card');

const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if (btn.innerHTML.toLowerCase() == 'all') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        })

        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active')
    })
})

// move upward button //

const moveUpward = document.querySelector("#go-upward");

moveUpward.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



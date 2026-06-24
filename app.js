let sidebar = document.querySelector('.sidebar')
let barsIcon = document.getElementById('barsIcon')
let closeBtn = document.getElementById('closeBtn')

barsIcon.onclick = function () {
    sidebar.style.right = 0
}

closeBtn.onclick = function () {
    sidebar.style.right = '-280px'
}


const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 150,
    deletedSpeed: 120
});

typewriter
    .typeString("Web Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Front-End Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("UI/UX Designer")
    .pauseFor(2000)
    .start();
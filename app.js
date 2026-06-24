let sidebar = document.querySelector('.sidebar')
let barsIcon = document.getElementById('barsIcon')
let closeBtn = document.getElementById('closeBtn')

barsIcon.onclick = function () {
    sidebar.style.right = 0
}

closeBtn.onclick = function () {
    sidebar.style.right = '-280px'
}
let menuBtn = document.querySelector('.hamburger')
let menuLinks = document.querySelector('.menuLinks')

menuBtn.addEventListener('click', function(){
    menuLinks.classList.toggle('open')
})
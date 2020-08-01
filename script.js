const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')
const menuClose = document.querySelector('.close')

function handleMenu() {
  menu.classList.remove('hide')
}

function handleMenuClose() {
  menu.classList.add('hide')
}

hamburger.addEventListener('click', handleMenu)
menuClose.addEventListener('click', handleMenuClose)

const btnSearch = document.getElementById('btn-search')
const inpt = document.querySelector('.pesquisa-campo input[type=text]')
const btnMenu = document.querySelector('.nome-user')
const menu = document.querySelector('.sidebar')
const notifBtn = document.querySelector('.icon-alert')
const boxNotifications = document.querySelector('.notification-box')
btnSearch.addEventListener('click', ()=>{
    inpt.classList.toggle('active')
    btnSearch.classList.toggle('active')
})

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('sidebar-on')
})

notifBtn.addEventListener('click', ()=>{
    boxNotifications.classList.toggle('notification-on')
})
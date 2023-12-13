const btnSearch = document.getElementById('btn-search')
const inpt = document.querySelector('.pesquisa-campo input[type=text]')

btnSearch.addEventListener('click', ()=>{
    inpt.classList.toggle('active')
    btnSearch.classList.toggle('active')
})

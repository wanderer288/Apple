const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const regOpen = document.getElementById('reg_open');
const regClose = document.getElementById('reg_close');
const regPopUp = document.getElementById('reg_pop')

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})

regOpen.addEventListener('click', function(e){
    e.preventDefault();
    regPopUp.classList.add('active-reg');
    popUp.classList.remove('active');
})

regClose.addEventListener('click', function(e){
    e.preventDefault();
    regPopUp.classList.remove('active-reg');
    popUp.classList.add('active');
})









let openModalBtn = document.querySelector(".open-modal")
let overlay = document.querySelector(".overlay")
let modal = document.querySelector('.modal')
let closeModalBtn = document.querySelector('.close-modal')


const showModal = function (){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const hideModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

openModalBtn.addEventListener('click', showModal)

overlay.addEventListener('click', hideModal)
closeModalBtn.addEventListener('click', hideModal)


document.addEventListener('keydown', (e)=>{
  if((e.key === 'Escape') && (!modal.classList.contains('hidden'))){
    hideModal()
  }
  
})
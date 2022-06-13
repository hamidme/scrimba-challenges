let elList = document.querySelector(".lead")
let elSubmitForm = document.getElementById('form')
let elInput = document.getElementById('get-lead')
let myLead = []

localStorage.clear()

function renderList(){
  let listItem = ''
      for (let item of myLead){
        item = `<li>
                  <a target='_blank' href='${item}'>
                    ${item}
                  </a>
               </li>`
        listItem += item
      }
  elList.innerHTML = listItem
}

let leadFromLocalStorage = JSON.parse(localStorage.getItem('myLead'))
console.log(leadFromLocalStorage)

elSubmitForm.addEventListener("submit",
  function myList(e){
    if(elInput.value != ""){
      myLead.push(elInput.value)
      localStorage.setItem('myLead', JSON.stringify(myLead))
      renderList()
      //console.log(localStorage.getItem('myLead'))
    }
    elInput.value = ""
    e.preventDefault()
  })




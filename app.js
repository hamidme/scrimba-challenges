
let charList = [0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','(',')','_','A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N',
              'O','P','Q','R','S','T','U','V','W','X','Y','Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let passwordOne = document.getElementById("pass-one")
let passwordTwo = document.getElementById("pass-two")
let passSimple = document.getElementById('passwordChoice1')
let passMedium = document.getElementById('passwordChoice2')
let passHard = document.getElementById('passwordChoice3')
let btnEL = document.getElementById('btn')

//generate random number from characters array
let genRandChar = function() {
  return Math.floor(Math.random()*charList.length )
}

//generate password of varying character lengths (5, 10, or 15)
let pwGen = function(el){

  let adjustComplexity = ""

  if(passSimple.checked){
    adjustComplexity = passSimple.value;
  } else if (passMedium.checked){
    adjustComplexity = passMedium.value;
  } else if (passHard.checked){
    adjustComplexity = passHard.value
  }
  //randomly select the characters based on the selected complexity level
  // and bind each characted to the password variable
  let password = "";
    for(let i=1; i<= adjustComplexity; i++){
      password += charList[genRandChar()]
    };
    el.textContent = password;
}

//click the button to generate 2 sets of passwords
 btnEL.addEventListener('click', 
  function(){
    pwGen(passwordOne);
    pwGen(passwordTwo)
  })
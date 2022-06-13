let elUnitValue = document.querySelector('.unit-value')


let elButton = document.getElementById('convert')
let elUnitOutput = document.querySelector('.unit-output')

function unitConverter(userInput, constant){
   
  if(elUnitValue.value != ""){
    const parsed = parseFloat(userInput)
    return constant*parsed
  }
  
}

elButton.addEventListener ('click',
  function convert(){
    let givenValue = elUnitValue.value
    //console.log(typeof(givenValue))
      let output = `${givenValue} meter = ${unitConverter(givenValue,
      3.281)} feet | ${givenValue}
      feet = ${unitConverter(givenValue, 0.304785)} meter`
      elUnitOutput.textContent = output
  }
  
)

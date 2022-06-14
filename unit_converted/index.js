//Select elements
let elInputValue = document.querySelector('.unit-value')
let elButton = document.getElementById('convert')
let elUnitOutput = document.querySelectorAll('.unit-output')

//use user input and the conversion factor to calculate the unit
//produce the output in 2 decimal places.
const calculator = function (userInput, constant){
    const parsed = parseFloat(userInput)
    return (constant*parsed).toFixed(2)
  }
  
/*This function takes 4 parameters to output the unit after conversion:
    name: name of the metric
    siblinPos: position of the element among the siblings
    unit1: input/output unit
    unit2: output/input unit
    constVal: conversion factor
*/
const convert = function(name, siblingPos, unit1, unit2, constVal){
    let givenValue = elInputValue.value
    
    //check if the input value not is empty and is a number
    if((givenValue != "") && (!isNaN(givenValue))) {
      let output = `${givenValue} ${unit1} = ${calculator(givenValue,
      constVal)} ${unit2} | ${givenValue}
      ${unit2} = ${calculator(givenValue, constVal)} ${unit1}`
      elUnitOutput[siblingPos].textContent = output
  } else {
      output = ""
      elUnitOutput[siblingPos].textContent = output
  }
}

//generate output value of each converter
function generateOutput(){
    convert(name="Length", siblingPos = 0, unit1='meter', unit2='feet', constVal=0.304785)
    convert(name="Volume", siblingPos = 1, unit1='liters', unit2='gallons', constVal=0.264)
    convert(name="Mass", siblingPos = 2, unit1='kilos', unit2='pounds', constVal=2.204)
}

//run the generate out when the convert button is clicked
elButton.addEventListener ('click', generateOutput)

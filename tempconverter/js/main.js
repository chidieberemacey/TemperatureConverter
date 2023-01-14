// write your pseudo code first

//listen for a click
document.querySelector('#convert').addEventListener('click', run)

//collect input
function run(){
    let temp = document.querySelector('#inputTemp').value

  //convert input
    temp = temp * 9/5 + 32

    //display temp
    document.querySelector('#displayTemp').innerHTML = temp
  
}


//////////////////////////////




document.querySelector('#nice').addEventListener('click', addThree)
document.querySelector('#great').addEventListener('click', minusFive)
document.querySelector('#rake').addEventListener('click', plusSix)


function addThree(){
    let total = document.querySelector('#inputSum').value
    total = (Number(total)) + 3
    document.querySelector('#displayResult').innerHTML = total
}

function minusFive(){
    let total = document.querySelector('#inputSum').value
    total = (Number(total)) - 5
    document.querySelector('#displayResult').innerHTML = total
}

function plusSix(){
    let total = document.querySelector('#inputSum').value
    total = (Number(total)) + 6
    document.querySelector('#displayResult').innerHTML = total
}


////////////////////////////////


document.querySelector('#siren').addEventListener('click', timesNine)

function timesNine(){
    let times = document.querySelector('#inputNumber').value
    let value = document.querySelector('#inputValue').value
    let answer = times * value
    document.querySelector('#displayTimes').innerHTML = answer
}




//9, 7, 2, siren, vini, peace
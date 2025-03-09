let inputFood = document.getElementById('enter-food')
let quantity = document.getElementById('quant')
let measurement = document.getElementById('measurement') // on hold for now
let calculate = document.getElementById('calculate')
let output = document.getElementById('output')
let outputVal = output.innerText

// Object holds foods and calories in 1oz
let caloriesOz = {"chicken": 68, 
                  "beef": 71,
                  "lamb": 83,
                  "turkey": 54,
                  "salmon": 59}

calculate.addEventListener('click', function() {
    output.textContent = outputVal
    let food = inputFood.value.toLowerCase()
    let amount = quantity.value
    if (!amount) {
        output.textContent += ' ' + caloriesOz[food]
    } else {
        output.textContent += ' ' + caloriesOz[food] * amount
    }
})
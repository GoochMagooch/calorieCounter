let inputFood = document.getElementById('enter-food')
let quantity = document.getElementById('quant')
let measurement = document.getElementById('measurement')
let calculate = document.getElementById('calculate')
let output = document.getElementById('output')
let outputVal = output.innerText

// Object holds foods and calories in 1oz
let caloriesOz = {"chicken": 68, 
                  "beef": 71,
                  "lamb": 83,
                  "turkey": 54,
                  "salmon": 59}

// calculates calories from entered food
calculate.addEventListener('click', function() {
    output.textContent = outputVal
    let food = inputFood.value.toLowerCase()
    let amount = quantity.value
    let measured = measurement.value.toLowerCase()
    if (!amount) {
        if (measured === 'lb') {
            output.textContent += ' ' + caloriesOz[food] * 16
        } else {
            output.textContent += ' ' + caloriesOz[food]
        }
    } else {
        if (measured === 'lb') {
            output.textContent += ' ' + caloriesOz[food] * amount * 16
        } else {
            output.textContent += ' ' + caloriesOz[food] * amount
        }
    }
})
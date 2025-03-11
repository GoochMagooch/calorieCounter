let inputFood = document.getElementById('enter-food')
let quantity = document.getElementById('quant')
let measurement = document.getElementById('measurement')
let addFood = document.getElementById('add-food')
let calculate = document.getElementById('calculate')
let clear = document.getElementById('clear')
let output = document.getElementById('output')
let outputVal = output.innerText
let storedFoods = []

// Object holds foods and calories in 1oz
let caloriesOz = {"chicken (white)": 34,
                  "chicken (dark)": 61,
                  "turkey (white)": 43,
                  "turkey (dark)": 46,
                  "beef": 71,
                  "lamb": 83,
                  "salmon": 59}

// stores foods in array to be calculated
function storeFoods(value) {
    storedFoods.push(value)
}

// adds food to array on button click
addFood.addEventListener('click', function() {
    let food = inputFood.value
    let amount = quantity.value
    let measured = measurement.value
    let argValueOz = 0
    let argValueLb = 0
    if (!food || !amount || !measured) {
        alert("fill out all fields")
    } else {
        if (measured === 'oz') {
            argValueOz += caloriesOz[food] * amount
            storeFoods(argValueOz)
        } else {
            argValueLb += caloriesOz[food] * amount * 16
            storeFoods(argValueLb)
        }
    }
})

// calculates calories from entered food
calculate.addEventListener('click', function() {
    if (storedFoods.length === 0) {
        output.textContent = outputVal
        let food = inputFood.value
        let amount = quantity.value
        let measured = measurement.value
        if (!food || !amount || !measured) {
            alert("fill out all fields")
        } else {
            measured === 'oz' ? output.textContent += ' ' + caloriesOz[food] * amount : 
            output.textContent += ' ' + caloriesOz[food] * amount * 16
        }
    } else {
        output.textContent = outputVal
        let total = 0
        for (let i = 0; i < storedFoods.length; i++) {
            total += storedFoods[i]
        }
        output.textContent += ' ' + total
    }
})

// clear calories database
clear.addEventListener('click', function() {
    location.reload()
})
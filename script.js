const apiURL = 'https://api.fda.gov/drug/label.json'
const apiKey = 'UgKeiMD72xWGSMHhStpFbPLXFmFWexfxC2HgrWwa'

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
                  "salmon": 59,
                  "pizza slice (small)": 250,
                  "pizza slice (medium)": 260,
                  "pizza slice (large)": 300}
let small = Object.keys(caloriesOz)[7]
let medium = Object.keys(caloriesOz)[8]
let large = Object.keys(caloriesOz)[9]

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
        if (food === small || food === medium || food === large) {
            argValueOz += caloriesOz[food] * amount
            storeFoods(argValueOz)
        } else if (measured === 'lb') {
            argValueLb += caloriesOz[food] * amount * 16
            storeFoods(argValueLb)
        } else if (measured === 'oz') {
            argValueOz += caloriesOz[food] * amount
        }
    }
})

// calculates calories from stored foods array or single food
calculate.addEventListener('click', function() {
    if (storedFoods.length === 0) {
        output.textContent = outputVal
        let food = inputFood.value
        let amount = quantity.value
        let measured = measurement.value
        if (!food || !amount || !measured) {
            alert("fill out all fields")
        } else {
            food === small || medium || large ? output.textContent += ' ' + caloriesOz[food] * amount : 
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
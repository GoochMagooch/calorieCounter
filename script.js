let output = document.getElementById('output')
let calculate = document.getElementById('calculate')
let inputFood = document.getElementById('enter-food')
let caloriesOz = {"chicken": 68}

calculate.addEventListener('click', function() {
    let food = inputFood.value
    output.textContent += `${caloriesOz.food}`
})
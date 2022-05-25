function fruit(fruit, grams, kilo){
let money = (kilo * (grams/1000)).toFixed(2)
console.log(`I need $${money} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
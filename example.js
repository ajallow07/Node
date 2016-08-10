var animals = [
   {name: 'Chiroma', species: 'cat'},
   {name: 'Floet', species: 'dog'},
   {name: 'Flustte', species: 'cat'},
   {name: 'Chriom', species: 'dog'},
   {name: 'Chiroma', species: 'dog'}
]
var dogs = animals.filter(function(animal){
   return animal.species === 'dog'
})


var names = animals.map(function(animal){
  return animal.name
})

var animalNames = animals.map((animal) => animal.name )

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 650},
  {amount: 300}
  ]

var totalSum = orders.reduce(function(sum, order){
    return sum + order.amount
}, 0)

var total = orders.reduce((sum, order) => sum + order.amount, 0)

//console.log(totalSum)
//recursion in javaScript
var countDown = (num) => {
    if (num===0) return;
    console.log(num);
    countDown(num-1)
}

countDown(10)

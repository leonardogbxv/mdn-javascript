// Ordering pizza analogy

//ex.1
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings)
})
.then(function(order) {
  return collectOrder(order)
})
.then(function(pizza) {
  eatPizza(pizza)
})
.catch(failureCallback)

// ex.2
chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback)

// ex.3
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback)
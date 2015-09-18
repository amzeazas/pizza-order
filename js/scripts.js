function Pizza(quantity, size) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.cost = function() {
  var total = 0
  if (this.size === "small") {
    total = total + 5;
  } else if (this.size === "medium") {
    total = total + 7;
  } else {
    total = total + 9;
  }
  this.toppings.forEach(function(topping) {
    total = total + topping.cost()
  });
  total = total * this.quantity;
  return total;
}

function Topping(name) {
  this.name = name;
}

Topping.prototype.cost = function() {
  var total = 1
  return total;
}

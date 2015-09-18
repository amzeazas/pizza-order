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

function Topping(name, amount) {
  this.name = name;
  this.amount = amount;
}

Topping.prototype.cost = function() {
  var total = 1
  if (this.amount === "normal") {
    total = total + 1;
  } else {
    total = total + 2;
  }
  return total;
}

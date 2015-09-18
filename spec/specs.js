describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("1", "large");
    expect(testPizza.quantity).to.equal("1");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.eql([]);
  });

  it("adds the cost to all pizzas", function() {
    var testPizza = new Pizza("1", "large");
    expect(testPizza.cost()).to.equal(9)
  });

  it("adds the cost of toppings to total cost of pizza", function() {
    var testPizza = new Pizza("2", "medium");
    var testTopping = new Topping("pepperoni");
    testPizza.toppings.push(testTopping);
    expect(testPizza.cost()).to.equal(16);
  });
});

describe('Toppings', function() {
  it("creates new toppings with the given specifications", function() {
    var testTopping = new Topping("pepperoni");
    expect(testTopping.name).to.equal("pepperoni");
  });

  it("adds the cost to all toppings", function() {
    var testTopping = new Topping("pepperoni");
    expect(testTopping.cost()).to.equal(1);
  });
});

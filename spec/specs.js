describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("1", "large");
    expect(testPizza.quantity).to.equal("1");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.eql([]);
  });

  it("adds the cost to all pizzas", function() {
    var testPizza = new Pizza("1", "large");
    expect(testPizza.cost()).to.equal(11)
  });
});

describe('Toppings', function() {
  it("creates new toppings with the given specifications", function() {
    var testTopping = new Topping("pepperoni", "normal");
    expect(testTopping.name).to.equal("pepperoni");
    expect(testTopping.amount).to.equal("normal");
  });

  it("adds the cost to all toppings", function() {
    var testTopping = new Topping("pepperoni", "normal");
    expect(testTopping.cost()).to.equal(2);
  });
});

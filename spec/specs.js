describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("1", "large");
    expect(testPizza.quantity).to.equal("1");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.eql([]);
  });
});

describe("Item", function() {
  it("Returns the name of the item", function() {
    const item = new Item("sword", 5, 10)
    expect(item.name).toEqual("sword")
  });

  it("Returns the sellIn of the item", function() {
    const item = new Item("sword", 5, 10)
    expect(item.sellIn).toEqual(5)
  });

  it("Returns the quality of the item", function() {
    const item = new Item("sword", 5, 10)
    expect(item.quality).toEqual(10)
  });
});

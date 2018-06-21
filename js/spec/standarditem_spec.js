describe("StandardItem", function() {
  it("Returns the name of the StandardItem", function() {
    const standarditem = new StandardItem('sword', 5, 10)
    expect(standarditem.name).toEqual('sword')
  });

  it("Returns the sellIn of the StandardItem", function() {
    const standarditem = new StandardItem('sword', 5, 10)
    expect(standarditem.sellIn).toEqual(5)
  });

  it("Returns the quality of the StandardItem", function() {
    const standarditem = new StandardItem('sword', 5, 10)
    expect(standarditem.quality).toEqual(10)
  });

  it("Decreases the quality by 1", function() {
    const standarditem = new StandardItem('sword', 5, 10)
    standarditem.update();
    expect(standarditem.quality).toEqual(9)
  });

  it("Decreases the quality by 2", function() {
    const standarditem = new StandardItem('sword', 0, 10)
    standarditem.update();
    expect(standarditem.quality).toEqual(8)
  });

  it("Decreases the quality by 2 for conjured items", function() {
    const standarditem = new StandardItem('Conjured sword', 5, 10)
    standarditem.update();
    expect(standarditem.quality).toEqual(8)
  });

  it("Decreases the quality by 4 for conjured items", function() {
    const standarditem = new StandardItem('Conjured sword', 0, 10)
    standarditem.update();
    expect(standarditem.quality).toEqual(6)
  });

  it("decreases the sellIn by 1", function() {
    const standarditem = new StandardItem('sword', 5, 10)
    standarditem.update();
    expect(standarditem.sellIn).toEqual(4)
  });
});

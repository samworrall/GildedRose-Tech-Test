describe("AgedBrie", function() {
  it("Returns the name of the AgedBrie", function() {
    const brie = new AgedBrie('AgedBrie', 5, 10)
    expect(brie.name).toEqual('AgedBrie')
  });

  it("Returns the sellIn of the Aged Brie", function() {
    const brie = new AgedBrie('AgedBrie', 5, 10)
    expect(brie.sellIn).toEqual(5)
  });

  it("Returns the quality of the Aged Brie", function() {
    const brie = new AgedBrie('AgedBrie', 5, 10)
    expect(brie.quality).toEqual(10)
  });

  it("Increases the quality by 1", function() {
    const brie = new AgedBrie('AgedBrie', 5, 10)
    brie.update();
    expect(brie.quality).toEqual(11)
  });

  it("decreases the sellIn by 1", function() {
    const brie = new AgedBrie('AgedBrie', 5, 10)
    brie.update();
    expect(brie.sellIn).toEqual(4)
  });
});

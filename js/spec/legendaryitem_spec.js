describe("LegendaryItem", function() {
  it("Returns the name of the LegendaryItem", function() {
    const legendaryitem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 10)
    expect(legendaryitem.name).toEqual('Sulfuras, Hand of Ragnaros')
  });

  it("Returns the sellIn of the LegendaryItem", function() {
    const legendaryitem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 10)
    expect(legendaryitem.sellIn).toEqual(5)
  });

  it("Returns the quality of the LegendaryItem", function() {
    const legendaryitem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 10)
    expect(legendaryitem.quality).toEqual(10)
  });

  it("Keeps its original quality", function() {
    const legendaryitem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 10)
    legendaryitem.update();
    expect(legendaryitem.quality).toEqual(10)
  });

  it("Keeps its original sellIn", function() {
    const legendaryitem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 10)
    legendaryitem.update();
    expect(legendaryitem.quality).toEqual(10)
  });
});

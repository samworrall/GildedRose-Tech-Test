describe("Gilded Rose", function() {

  describe("updateQuality", function() {
    it("Should decrease the quality of a standard item by 1", function() {
      const gildedRose = new Shop([ new Item("sword", 5, 5)]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(4)
    });

    it("Should increase the quality of Aged Brie", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 5, 5)]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(6)
    })

  })

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

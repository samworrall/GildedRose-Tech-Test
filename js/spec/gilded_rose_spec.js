describe("Gilded Rose", function() {

  describe("updateQuality", function() {
    it("Should decrease the quality of a standard item by 1", function() {
      const gildedRose = new Shop([ new Item("sword", 5, 5)]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(4)
    });

    it("Should increase the quality of Aged Brie by 1", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 5, 5)]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(6)
    });

    it("Should no longer see its value depreciate after reaching 0", function() {
      const gildedRose = new Shop([ new Item("sword", 5, 1)]);
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0)
    });

    it("Should depreciate in value twice as fast", function() {
      const gildedRose = new Shop([ new Item("sword", 0, 5)]);
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(1)
    });

      describe("SellIn value is greater than 10", function() {
        it("Should increase the quality of Backstage passes by 1", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(6)
        });
      });
  });
});

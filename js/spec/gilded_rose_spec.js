describe("Gilded Rose", function() {

  describe("updateQuality", function() {

    describe("Within SellIn value", function() {

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

      it("Should cap quality at 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 5, 50)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(50)
      })

      it("Should depreciate in value twice as fast", function() {
        const gildedRose = new Shop([ new Item("sword", 0, 5)]);
        gildedRose.updateQuality()
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(1)
      });

      it("Should not depreciate in quality", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(5)
      });

        describe("SellIn value is greater than 10", function() {
          it("Should increase the quality of Backstage passes by 1", function() {
            const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 5)]);
            gildedRose.updateQuality()
            expect(gildedRose.items[0].quality).toEqual(6)
          });
        });

        describe("SellIn value is less than 10 and greater than 5", function() {
          it("Should increase the quality of Backstage passes by 2", function() {
            const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5)]);
            gildedRose.updateQuality()
            expect(gildedRose.items[0].quality).toEqual(7)
          });
        });

        describe("SellIn value is less than 5 and greater than 0", function() {
          it("Should increase the quality of Backstage passes by 3", function() {
            const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5)]);
            gildedRose.updateQuality()
            expect(gildedRose.items[0].quality).toEqual(8)
          });
        });
    });


    describe("SellIn value is 0 or less", function() {
      it("Should decrease the quality of Backstage passes to 0", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(0)
      });

      it("Should decrease the quality of standard items by 2", function() {
        const gildedRose = new Shop([ new Item("sword", 0, 10)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(8)
      });

      it("Should not change the quality of Sulfuras", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(10)
      });
    });
  });
});

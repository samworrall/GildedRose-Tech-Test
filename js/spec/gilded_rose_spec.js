describe("Gilded Rose", function() {

  describe("#updateAgedBrie", function() {
    it('Increases the quality by 1', function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 5, 5)]);
      gildedRose.updateAgedBrie(gildedRose.items[0]);
      expect(gildedRose.items[0].quality).toEqual(6)
    });
  });

  describe("#updateQuality", function() {

    describe("Standard Items", function() {

      describe("Within SellIn value", function() {
        it("Should decrease the quality of a standard item by 1", function() {
          const gildedRose = new Shop([ new Item("sword", 5, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(4)
        });

        it("Should no longer see its value depreciate after reaching 0", function() {
          const gildedRose = new Shop([ new Item("sword", 5, 1)]);
          gildedRose.updateQuality()
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(0)
        });
      });

      describe("After SellIn value = 0", function() {
        it("Should depreciate in value twice as fast", function() {
          const gildedRose = new Shop([ new Item("sword", 0, 5)]);
          gildedRose.updateQuality()
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(1)
        });
      });

      describe("SellIn value", function() {
        it('Decreases by 1 after an update', function() {
          const gildedRose = new Shop([ new Item("sword", 10, 10)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].sellIn).toEqual(9)
        });
      });
    });

    describe("Aged Brie", function() {

      describe("Within SellIn value", function() {
        it("Should increase the quality of Aged Brie by 1", function() {
          const gildedRose = new Shop([ new Item("Aged Brie", 5, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(6)
        });

        it("Should cap quality at 50", function() {
          const gildedRose = new Shop([ new Item("Aged Brie", 5, 50)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(50)
        });
      });

      describe("After SellIn value = 0", function() {
        it("Should continue to increase in quality by 1", function() {
          const gildedRose = new Shop([ new Item("Aged Brie", 0, 10)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(11)
        });
      });
    });

    describe("Backstage Passes", function() {

      describe("SellIn value is greater than 10", function() {
        it("Should increase the quality of Backstage passes by 1", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(6)
        });
      });

      describe("SellIn value is 10", function() {
        it("Should increase the quality of Backstage passes by 2", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(7)
        });
      });

      describe("SellIn value is less than 10 and greater than 5", function() {
        it("Should increase the quality of Backstage passes by 2", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(7)
        });
      });

      describe("SellIn value is 5", function() {
        it("Should increase the quality of Backstage passes by 3", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(8)
        });
      });

      describe("SellIn value is less than 5 and greater than 0", function() {
        it("Should increase the quality of Backstage passes by 3", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(8)
        });

        it("Should keep quality of Backstage passes at 50", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 49)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(50)
        });
      });

      describe("SellIn value is 0 or less", function() {
        it("Should decrease the quality of Backstage passes to 0", function() {
          const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(0)
        });
      });
    });

    describe("Sulfuras", function() {

      describe("Within SellIn value", function() {
        it("Should not depreciate in quality", function() {
          const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(5)
        });
      });

      describe("SellIn value is 0 or less", function() {
        it("Should not depreciate in quality", function() {
          const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].quality).toEqual(10)
        });
      });

      describe('SellIn', function() {
        it('Holds its value after an update', function() {
          const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
          gildedRose.updateQuality()
          expect(gildedRose.items[0].sellIn).toEqual(10)
        });
      });
    });
  });

  describe('Conjured items', function() {

    describe('Within SellIn date', function() {
      it('Should depreciate in value twice as fast', function() {
        const gildedRose = new Shop([ new Item("Conjured sword", 10, 10)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(8)
      });
    });

    describe('SellIn date <= 0', function() {
      it('Should depreciate in value twice as fast', function() {
        const gildedRose = new Shop([ new Item("Conjured sword", 0, 10)]);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).toEqual(6)
      });
    });

    it('Should remain unchanged', function() {
      const gildedRose = new Shop([ new Item("Conjured Sulfuras, Hand of Ragnaros", 10, 10)]);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(10)
    });
  });
});

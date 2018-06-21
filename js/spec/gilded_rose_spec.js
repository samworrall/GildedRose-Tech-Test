agedBrie = jasmine.createSpyObj('agedBrie', ['update'])

describe("Shop", function() {

  it("Returns an array of all Items in a shop", function() {
    const sword = new StandardItem("sword", 5, 5)
    const gildedRose = new Shop([sword]);
    expect(gildedRose.items).toEqual([sword])
  });

  describe("#updateQuality", function() {

    describe("Test with agedBrie spy", function() {
      it("Has the update method called on it", function() {
        const gildedRose = new Shop([agedBrie])
        gildedRose.updateQuality();
        expect(agedBrie.update).toHaveBeenCalled()
      });

      it("Returns the list of items after updating", function() {
        const gildedRose = new Shop([agedBrie])
        expect(gildedRose.updateQuality()).toEqual([agedBrie])
      });
    });
  });
});

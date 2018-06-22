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

  describe("#update", function() {
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

    it("Decreases the sellIn by 1", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      standarditem.update();
      expect(standarditem.sellIn).toEqual(4)
    });
  });

  describe("#is_a_conjured_item", function() {
    it("Returns true", function() {
      const standarditem = new StandardItem('Conjured sword', 5, 10)
      expect(standarditem.is_a_conjured_item()).toEqual(true)
    });

    it("Returns false", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      expect(standarditem.is_a_conjured_item()).toEqual(false)
    });
  });

  describe("#define_multiplier", function() {
    it("Sets multiplier to 1", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      standarditem.define_multiplier();
      expect(standarditem.multiplier).toEqual(1)
    });
  });

  describe("#standard_decrease_quality", function() {
    it("Decreases the quality by 1", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      standarditem.standard_decrease_quality();
      expect(standarditem.quality).toEqual(9)
    });
  });

  describe("#beyond_sellIn_decrease_quality", function() {
    it("Decreases the quality by 2", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      standarditem.beyond_sellIn_decrease_quality();
      expect(standarditem.quality).toEqual(8)
    });
  });

  describe("#calculate_update", function() {
    it("Decreases quality by 1", function() {
      const standarditem = new StandardItem('sword', 5, 10)
      standarditem.calculate_update();
      expect(standarditem.quality).toEqual(9)
    });

    it("Decreases quality by 2", function() {
      const standarditem = new StandardItem('sword', 0, 10)
      standarditem.calculate_update();
      expect(standarditem.quality).toEqual(8)
    });

    it("Decreases quality by 1", function() {
      const standarditem = new StandardItem('sword', 0, 1)
      standarditem.calculate_update();
      expect(standarditem.quality).toEqual(0)
    });

    it("Keeps quality at 0", function() {
      const standarditem = new StandardItem('sword', 5, 0)
      standarditem.calculate_update();
      expect(standarditem.quality).toEqual(0)
    });
  });
});

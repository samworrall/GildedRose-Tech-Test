describe("BackstagePass", function() {
  it("Returns the name of the BackstagePass", function() {
    const backstagepass = new BackstagePass('BackstagePass', 5, 10)
    expect(backstagepass.name).toEqual('BackstagePass')
  });

  it("Returns the sellIn of the Aged Brie", function() {
    const backstagepass = new BackstagePass('BackstagePass', 5, 10)
    expect(backstagepass.sellIn).toEqual(5)
  });

  it("Returns the quality of the Aged Brie", function() {
    const backstagepass = new BackstagePass('BackstagePass', 5, 10)
    expect(backstagepass.quality).toEqual(10)
  });

  it("Increases the quality by 1", function() {
    const backstagepass = new BackstagePass('BackstagePass', 11, 10)
    backstagepass.update();
    expect(backstagepass.quality).toEqual(11)
  });

  it("Increases the quality by 2", function() {
    const backstagepass = new BackstagePass('BackstagePass', 10, 10)
    backstagepass.update();
    expect(backstagepass.quality).toEqual(12)
  });

  it("Increases the quality by 3", function() {
    const backstagepass = new BackstagePass('BackstagePass', 5, 10)
    backstagepass.update();
    expect(backstagepass.quality).toEqual(13)
  });

  it("Decreases the quality to 0", function() {
    const backstagepass = new BackstagePass('BackstagePass', 0, 10)
    backstagepass.update();
    expect(backstagepass.quality).toEqual(0)
  });

  it("Decreses the sellIn by 1", function() {
    const backstagepass = new BackstagePass('BackstagePass', 5, 10)
    backstagepass.update();
    expect(backstagepass.sellIn).toEqual(4)
  });
});

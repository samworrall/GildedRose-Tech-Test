class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    switch(this.quality < 50) {
      case true:
        this.quality +=1
    }
    this.sellIn -= 1
  }
}

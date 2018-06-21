class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.sellIn <= 0) {
      this.quality = 0
    } else if (this.quality < 50) {
      this.quality += 1
      if (this.sellIn <= 10 && this.quality < 50) {
        this.quality += 1
        if (this.sellIn <= 5 && this.quality < 50) {
          this.quality += 1
        }
      }
    }
    this.sellIn -= 1
  }
}

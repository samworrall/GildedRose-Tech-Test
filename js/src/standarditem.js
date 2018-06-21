class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    var multiplier = 1
    if (this.name.includes('Conjured')) {
      multiplier = 2
    }
    if (this.sellIn <= 0 && this.quality > 1) {
      this.quality -= 2 * multiplier
    } else if (this.quality > 0) {
      this.quality -= 1 * multiplier
    }
    this.sellIn -= 1
  }
}

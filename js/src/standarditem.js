class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    var multiplier = 1
    switch(this.name.includes('Conjured')) {
      case true:
        var multiplier = 2
        break;
    }
    switch(this.sellIn <= 0 && this.quality > 1) {
      case true:
        this.quality -= 2 * multiplier
        break;
      case false:
        switch(this.quality > 0) {
          case true:
            this.quality -= 1 * multiplier
            break;
        }
    }
    this.sellIn -= 1
  }
}

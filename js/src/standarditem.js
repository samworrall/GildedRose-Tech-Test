class StandardItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.multiplier = 1
  }

  update() {
    this.define_multiplier();
    this.calculate_update();
  }

  is_a_conjured_item() {
    return this.name.includes('Conjured')
  }

  define_multiplier() {
    this.multiplier = 1
    switch(this.is_a_conjured_item()) {
      case true:
        this.multiplier = 2
        break;
    }
  }

  calculate_update() {
    switch(this.sellIn <= 0 && this.quality > 1) {
      case true:
        this.beyond_sellIn_decrease_quality();
        break;
      case false:
        switch(this.quality > 0) {
          case true:
            this.standard_decrease_quality();
            break;
        }
    }
    this.sellIn -= 1
  }

  standard_decrease_quality() {
    this.quality -= 1 * this.multiplier
  }

  beyond_sellIn_decrease_quality() {
    this.quality -= 2 * this.multiplier
  }
}

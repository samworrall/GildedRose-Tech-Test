class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.quality < 50) {
      this.quality += 1
    }
    this.sellIn -= 1
  }
}

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

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }
    return this.items
  }
}

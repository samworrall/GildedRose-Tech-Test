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
      if (this.items[i].name.includes('Aged Brie')) {
        this.updateAgedBrie(this.items[i]);
      } else if (this.items[i].name.includes('Backstage passes to a TAFKAL80ETC concert')) {
        this.updateBackstagePass(this.items[i]);
      } else if (!this.items[i].name.includes('Sulfuras, Hand of Ragnaros')) {
        this.updateStandardItem(this.items[i]);
      }
    }
    return this.items
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1
    }
    item.sellIn -= 1
  }

  updateBackstagePass(item) {
    if (item.sellIn <= 0) {
      item.quality = 0
    } else if (item.quality < 50) {
      item.quality += 1
      if (item.sellIn <= 10 && item.quality < 50) {
        item.quality += 1
        if (item.sellIn <= 5 && item.quality < 50) {
          item.quality += 1
        }
      }
    }
    item.sellIn -= 1
  }

  updateStandardItem(item) {
    var multiplier = 1
    if (item.name.includes('Conjured')) {
      multiplier = 2
    }
    if (item.sellIn <= 0 && item.quality > 1) {
      item.quality -= 2 * multiplier
    } else if (item.quality > 0) {
      item.quality -= 1 * multiplier
    }
    item.sellIn -= 1
  }
}

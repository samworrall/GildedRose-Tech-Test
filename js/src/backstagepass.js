class BackstagePass extends Item {
  constructor(name, sellIn, quality, rules) {
    super(name, sellIn, quality);
    this.rules = rules;
  }

  update() {
    this.quality = this.rules
      .filter((rule) => rule.applies(sellIn, quality))
      .reduce((rule) => rule.apply(quality), this.quality)
  }
}

// rule.js
class Rule {

  applies(sellIn, quality) {
    return sellIn < 5 && quality > 20;
  }

  apply(quality) {
    return quality + 1;
  }
}

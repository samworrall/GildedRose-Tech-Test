class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    switch(this.sellIn <= 0) {
      case true:
        this.quality = 0
        break;
      case false:
        switch(this.quality < 50) {
          case true:
            this.increase_quality();
            switch(this.sellIn <= 10 && this.quality < 50) {
              case true:
                this.increase_quality();
                switch(this.sellIn <= 5 && this.quality < 50) {
                  case true:
                    this.increase_quality();
                    break;
                }
            }
        }
    }
    this.sellIn -= 1
  }

  increase_quality() {
    this.quality += 1
  }
}

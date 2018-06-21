class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(function(item) {
      item.update();
    });
    return this.items
  }
}

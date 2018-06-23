# GildedRose Tech Test

This is the GildedRose tech test for week 10 of Makers Academy. The task was to inherit some legacy code that failed to follow the basic priniciples of OOP. The code mapped the depreciation of items in an Inn. The legacy code began with no testing.

The aim was to refactor the existing legacy code to a point where a new 'conjured item' with different behaviour could be added to the system with ease, and without disrupting the rest of the code.


## Brief

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."


## User Stories

```
As an Innkeeper,
So that I can keep track of my items,
I would like all my items to be viewable at once
```

```
As an Innkeeper,
So that I do not have to monitor the quality of items myself,
I would like the software to track their quality
```

```
As an Innkeeper,
So that I do not have to monitor the sell-in-date of items myself,
I would like the software to track their sell-in-date
```

```
As an Innkeeper,
So that I can cater to more customers,
I would like to be able to sell conjured items
```


## Organisation

My Trello Board:

<a href="https://trello.com/b/SnZPi9C5/gildedrose"><img src="logos/Trello.png" height="60" width="140"></a>


## Approach

At first, I wanted to dive straight into refactoring the legacy code, however I noticed that it had not been tested at all. The first task then became adding tests for all the legacy functionality. I kept track of what needed testing using my Trello board.

After the tests were in place, I mapped out in a notebook the seemingly complex conditional statement tree which the legacy code had implemented. Through diagramming and planning, I managed to 'conjure' a more refined and efficient method of handling the conditionals.

My aim was to rewrite the legacy code in a way that would not break the tests at all. I managed to achieve this, and also managed to extract methods out of the single updateQuality method to increase readability.

After this refactoring, the implementation of the new conditions for 'conjured items' was quite simple, and required very little extra code.

If I were to improve upon this current iteration, I would like to implement a code coverage tester such as Istanbul so that I can be sure I am testing everything that is necessary. In terms of the source code, I would like to refactor further, perhaps extracting the update classes into a different file so that one file is not responsible for holding all the code.

Update 21/06/2018:

I have now created classes for all types of items, which extend the Item class. This allowed me to leave the Item class alone, but give all individual items their own separate update methods to achieve polymorphism. Due to this, the shop update method now simply iterates over the items, and calls update on each one, and each item is in charge of its own update business logic.

I have also separated each class into its own file to avoid confusion and one long file called gildedrose.js. It is now easier to change something as a dev can know exactly where to look. Each class has its own respective spec file, and I have collated the original tests into a feature spec file.


## Instructions

Clone this repository
```
$ git clone git@github.com:samworrall/GildedRose-Tech-Test.git
```

Check the tests are all passing by running SpecRunner and checking your browser
```
$ open SpecRunner.html
```

Open up the console to play around with the functionality
```
command + option + j
```

## Example


shop = new Shop(
  [new StandardItem("sword", 5, 5),
   new AgedBrie("Aged Brie", 5, 5),
   new LegendaryItem("Sulfuras, Hand of Ragnaros", 5, 5),
   new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 20, 5),
   new StandardItem("Conjured sword", 10, 10)]
   )
```
Shop {items: Array(5)}
items: Array(5)
0: StandardItem {name: "sword", sellIn: 5, quality: 5}
1: AgedBrie {name: "Aged Brie", sellIn: 5, quality: 5}
2: LegendaryItem {name: "Sulfuras, Hand of Ragnaros", sellIn: 5, quality: 5}
3: BackstagePass {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 20, quality: 5}
4: StandardItem {name: "Conjured sword", sellIn: 10, quality: 10}
```

shop.updateQuality();
```
(5) [StandardItem, AgedBrie, LegendaryItem, BackstagePass, StandardItem]
0: StandardItem {name: "sword", sellIn: 4, quality: 4}
1: AgedBrie {name: "Aged Brie", sellIn: 4, quality: 6}
2: LegendaryItem {name: "Sulfuras, Hand of Ragnaros", sellIn: 5, quality: 5}
3: BackstagePass {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 19, quality: 6}
4: StandardItem {name: "Conjured sword", sellIn: 9, quality: 8}
```

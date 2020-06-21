import Item from './item.js'
import OnlyFresh from './onlyfresh.js'
import Legend from './legend.js'
import Conjured from './conjured.js'
import Shop from './shop.js'


module.exports = {
Item,
Legend,
OnlyFresh,
Conjured,
Shop
}


/*
Sinon en changeant la "for loop" toute pétée de Leeroy par un "map" on peut avoir tout qui fonctionne avec juste cette modif dans Shop :

  updateQuality() {
    this.items.map((item) => {
      // Except for legendary item
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return 
      }
      // Decrease validity 
      item.sellIn--;
      let perim = (item.sellIn >= 0) ? 1 : 2

      // Update quality  
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert' || item.name === 'Aged Brie') {
        if (item.sellIn < 0) {
          item.quality = 0
          return
        }
        if (item.quality === 50) {
          return 
        }
        item.quality++;
        if (item.sellIn <= 10 && item.quality < 50) {
          item.quality++;
        }
        if (item.sellIn <= 5 && item.quality < 50) {
          item.quality++;
        }
        return 
      }

      if (item.quality === 0) {
        return 
      }

      if (item.name.split(' ')[0] === "Conjured" ) {
        item.quality = item.quality - perim;
      }

      item.quality = item.quality - perim;
    })
    return this.items;
  }
}


... bon j'avoue ça reste un peu crado et ça respecte pas le principe SOLID
*/
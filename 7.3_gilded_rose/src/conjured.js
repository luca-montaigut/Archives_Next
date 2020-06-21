import Item from './item.js'

class Conjured extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
      this.perimSpeed = 2
    }
  }
  
  
  export default Conjured
  
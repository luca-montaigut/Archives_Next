class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
      this.perimSpeed = 1
    }
  
    decreaseTime(){
        this.sellIn--;
        let perim = (this.sellIn >= 0) ? 1 : 2
        return (perim * this.perimSpeed)
    }

    updateQuality(){
      let decreaseQuality = this.decreaseTime()
  
      this.quality = this.quality - decreaseQuality;

      if (this.quality < 0) {
        this.quality = 0
        return 
      }
    }
  }

  export default Item
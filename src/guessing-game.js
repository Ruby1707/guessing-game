class GuessingGame {
    constructor() {
      this.Big=0;
      this.Small=0;
      this.Answer=0;
    }

    setRange(min, max) {
      this.Big=max;
      this.Small=min;
    }

    guess() {
      return this.new=Math.round((this.Big+this.Small)/2);
    }

    lower() {
      this.setRange(this.Small,this.new)
    }

    greater() {
      this.setRange(this.new,this.Big)
    }
}

module.exports = GuessingGame;


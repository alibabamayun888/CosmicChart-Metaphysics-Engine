export class Percent  {

	constructor(e,t){
this.currentValue = e;
this.totalValue = t;
}


	computePercent () {
	  return this.currentValue / this.totalValue * 100;
	}

	computeRate () {
	  return this.currentValue / this.totalValue;
	}

	reverse () {
	  this.currentValue = this.totalValue - this.currentValue;
	  return this;
	}

	copy () {
	  return new Percent(this.currentValue, this.totalValue);
	}

	computePercentReverse () {
	  return (this.totalValue - this.currentValue) / this.totalValue * 100;
	}

	computeRateReverse () {
	  return (this.totalValue - this.currentValue) / this.totalValue;
	}

}

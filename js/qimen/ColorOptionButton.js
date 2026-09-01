import { IComponent } from "./IComponent.js";
export class ColorOptionButton extends IComponent {

	constructor(){

}


	initView () {
	  this.spColorValue = this.findChild("spColorValue");
	}

	setColor (e) {
	  this.hexColor = e;
	  this.spColorValue.color = cc.Color.BLACK.fromHEX(e);
	}

	getColor () {
	  return this.hexColor;
	}

}

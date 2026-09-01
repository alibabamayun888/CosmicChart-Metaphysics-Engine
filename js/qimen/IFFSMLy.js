import { PhoneXAdapter } from "./PhoneXAdapter.js";
import { ILayer } from "./ILayer.js";
export class IFFSMLy extends ILayer {

	constructor(){
this._isHaveBottomNode = false;
}


	get isHaveBottomNode () {
  return this._isHaveBottomNode;
}

	initView () {
	  this.btnBack = this.addClick("upNode/btnBack", this.btnCloseClick);
	}

	addBottom (e) {
	  this._isHaveBottomNode = true;
	  e.parent = this.node;
	  this.btnBack.active = false;
	  var t = this.findChild("scrollView");
	  t.getComponent(cc.Widget).top = 150;
	  t.getComponent(cc.Widget).bottom = 150;
	  t.height = 1620;
	  t.y = 0;
	  this.addComponent(PhoneXAdapter);
	}

	btnCloseClick () {
	  this.backLastLayer();
	}

}

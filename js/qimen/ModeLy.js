import { ILayer } from "./ILayer.js";
export class ModeLy extends ILayer {

	constructor(){

}


	start () {
	  this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndHandler, this);
	  this.addComponent(cc.Button);
	}

	setHideCallFun (e, t) {
	  this.hideCallFun = e;
	  this.hideCallFunSender = t;
	}

	_touchEndHandler () {
	  if (this.hideCallFun) {
	    this.hideCallFun.call(this.hideCallFunSender);
	  } else {
	    this.node.destroy();
	  }
	}

}

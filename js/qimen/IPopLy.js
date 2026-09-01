import { ILayer } from "./ILayer.js";
export class IPopLy extends ILayer {

	constructor(){

}


	onEnableAnimation () {
	  var e = this.getComponent(cc.Widget);
	
	  if (e) {
	    e.enabled = false;
	  }
	
	  var t = this.getComponent(cc.Sprite);
	  this.node.setScale(.1);
	  var n = cc.scaleTo(1.2, 1),
	      i = cc.sequence(n, cc.callFunc(function () {
	    if (t) {
	      t.enabled = true;
	    }
	
	    e.enabled = true;
	  }));
	  this.node.runAction(i);
	}

}

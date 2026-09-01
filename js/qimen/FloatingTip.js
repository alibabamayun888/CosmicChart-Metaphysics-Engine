import { IComponent } from "./IComponent.js";
export class FloatingTip extends IComponent {

	constructor(){

}


	initView () {
	  this.labMsg = this.findChild("labMsg", cc.Label);
	}

	showTip (e) {
	  this.node.active = true;
	  this.labMsg.string = e;
	  var t = this;
	  this.scheduleOnce(function () {
	    t.node.active = false;
	  }, 3);
	}

}

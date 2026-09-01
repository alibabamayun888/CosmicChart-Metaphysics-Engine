import IComponent from "./IComponent.js";
import { StageUtils } from "./StageUtils.js";
export class EasyLoading extends IComponent {

	constructor(){

}


	initView () {
	  this.spProgress = this.findChild("spProgress");
	  this.labMsg = this.findChild("labMsg", cc.Label);
	  var e = this.findChild("background");
	  this.setTouchSwallow(true);
	  StageUtils.getInstance().setFullScreen([this.node, e]);
	}

	showLoading (e) {
	  this.node.active = true;
	
	  if (!e) {
	    e = "";
	  }
	
	  this.labMsg.string = e;
	  var t = this;
	  this.intervalHandle = setInterval(function () {
	    if (t.node.active) {
	      t.spProgress.angle -= 5;
	    }
	  }, 100);
	}

	hide () {
	  clearInterval(this.intervalHandle);
	  this.node.active = false;
	}

}

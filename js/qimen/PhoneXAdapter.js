import IComponent from "./IComponent.js";
import { Device } from "./Device.js";
export class PhoneXAdapter extends IComponent {

	constructor(){

}


	initView () {
	  this.downNode = this.findChild("downNode");
	  this.scrollView = this.findChild("scrollView");
	}

	initData () {
	  if (Device.instance.isPhoneX) {
	    this.downNode.height = 190;
	    this.scrollView.getComponent(cc.Widget).bottom += 40;
	  }
	}

}

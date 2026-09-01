import { IComponent } from "./IComponent.js";
export class CheckWidget extends IComponent {

	constructor(){

}


	get isChecked () {
  return this.tog.isChecked;
}

	initView () {
	  this.labTitle = this.findChild("labTitle", cc.Label);
	  this.labTitleExplain = this.findChild("labTitleExplain", cc.Label);
	  var e = this.labTitleExplain.string;
	
	  if (!(e || 0 != e.length)) {
	    this.labTitleExplain.node.active = false;
	  }
	
	  this.tog = this.findChild("toggle", cc.Toggle);
	}

	setTitle (e) {
	  this.labTitle.string = e;
	}

	setTitleExplain (e) {
	  this.labTitleExplain.string = e;
	  this.labTitleExplain.node.active = true;
	}

	setChecked (e) {
	  this.tog.isChecked = e;
	}

	getToggle () {
	  return this.tog;
	}

	setDisable () {
	  var e = this.getComponent(cc.Button);
	
	  if (!e) {
	    e = this.addComponent(cc.Button);
	  }
	
	  e.enabled = false;
	  e.interactable = false;
	  e.enableAutoGrayEffect = true;
	  this.tog.enabled = false;
	  this.tog.interactable = false;
	  this.tog.enableAutoGrayEffect = true;
	}

	setNormal () {
	  var e = this.getComponent(cc.Button);
	
	  if (!e) {
	    e = this.addComponent(cc.Button);
	  }
	
	  e.enabled = true;
	  e.interactable = true;
	  e.enableAutoGrayEffect = false;
	  this.tog.enabled = true;
	  this.tog.interactable = true;
	  this.tog.enableAutoGrayEffect = false;
	}

	bindClickFun (e, t) {
	  t.addToggleClick(this.tog.node, e);
	}

}

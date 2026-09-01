import { IComponent } from "./IComponent.js";
export class TitleEditBox extends IComponent {

	constructor(){

}


	initView () {
	  this.labTitle = this.findChild("labTitle", cc.Label);
	  this.labZiShu = this.findChild("labZiShu", cc.Label);
	  this.edtContent = this.findChild("edtContent", cc.EditBox);
	}

	start () {
	  this.edtContent.node.on("text-changed", this.text_changed, this);
	}

	init (e, t) {
	  this.labTitle.string = e;
	  this.edtContent.maxLength = t;
	  this.setLabZiShu();
	}

	getContent () {
	  return this.edtContent.string;
	}

	setContent (e) {
	  if (e) {
	    this.edtContent.string = e;
	  } else {
	    this.edtContent.string = "";
	  }
	}

	setLabZiShu () {
	  var e = this.getContent(),
	      t = 0;
	
	  if (e) {
	    t = e.length;
	  }
	
	  this.labZiShu.string = t + "/" + this.edtContent.maxLength;
	}

	text_changed () {
	  this.setLabZiShu();
	}

}

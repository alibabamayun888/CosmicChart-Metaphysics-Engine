import ILayer from "./ILayer.js";


  var r;

export class EditBoxLayer extends ILayer {

	constructor(){

}


	static setPrefab (e) {
	  r = e;
	}

	static create (e, n, i) {
	  if (void 0 === i) {
	    i = null;
	  }
	
	  var o = cc.instantiate(r);
	  o.parent = e;
	  var s = o.addComponent(t);
	  s.init(n, i);
	  var u = e.getComponent(ILayer);
	
	  if (u) {
	    u.popLayer(o);
	  }
	
	  return s;
	}

	initView () {
	  this.addClick("upNode/btBack", this.btnCloseClick);
	  this.addClick("upNode/btSure", this.btSureClick);
	  this.labTitle = this.findChild("upNode/labTitle", cc.Label);
	  this.edt = this.findChild("edtBg/edt", cc.EditBox);
	  this.labExpain = this.findChild("labExpain", cc.Label);
	}

	init (e, t) {
	  this.labTitle.string = e;
	
	  if (t) {
	    this.edt.string = t;
	  } else {
	    this.edt.string = "";
	  }
	}

	setPlaceholder (e) {
	  this.edt.placeholder = e;
	}

	setExpain (e) {
	  this.labExpain.node.active = true;
	  this.labExpain.string = e;
	}

	setMaxLen (e) {
	  this.edt.maxLength = e;
	}

	setInputMode (e) {
	  this.edt.inputMode = e;
	}

	bindSureCallFun (e) {
	  this.sureCallFuno = e;
	}

	btnCloseClick () {
	  this.node.destroy();
	}

	btSureClick () {
	  var e = this.sureCallFuno.call(this.edt.string);
	
	  if (null == e || null == e) {
	    this.node.destroy();
	  } else {
	    if (!("true" != e && 1 != e)) {
	      this.node.destroy();
	    }
	  }
	}

}

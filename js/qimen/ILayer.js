import { IComponent } from "./IComponent.js";


  var r;

export default class ILayer extends IComponent {

	constructor(){

}


	static setScene (e) {
	  r = e;
	}

	onLoad () {
	  e.prototype.onLoad.call(this);
	  this.setTouchSwallow(true);
	}

	onEnable () {
	  e.prototype.onEnable.call(this);
	  this.onEnableAnimation();
	}

	onEnableAnimation () {}

	onDisable () {
	  e.prototype.onDisable.call(this);
	}

	getLayer (e) {
	  return this.findChild(e).getComponent(t);
	}

	backLastLayer () {
	  return r.backLastLayer();
	}

	changeLayer (e, t) {
	  return r.changeLayer(e, this.node, t);
	}

	popLayer (e, t) {
	  return "string" == typeof e ? r.popLayer(e, this.node, t) : r.popLayer(e.name, this.node, t);
	}

	closeAllChildLy () {
	  for (var e = this.node.children, n = 0; n < e.length; n++) {
	    var i = e[n];
	
	    if (i.getComponent(t)) {
	      i.active = false;
	    }
	  }
	}

}

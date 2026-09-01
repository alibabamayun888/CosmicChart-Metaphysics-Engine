import ILayer from "./ILayer.js";
import { CheckListLy } from "./CheckListLy.js";


  var r;

export class SquareCheckListLy extends CheckListLy {

	constructor(){

}


	static setPrefab (e) {
	  r = e;
	}

	static create (e, n, i) {
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

}

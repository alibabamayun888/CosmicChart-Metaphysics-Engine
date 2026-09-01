import { Singleton } from "./Singleton.js";
export class TweenAction extends Singleton {

	constructor(){

}


	static createMoveToShake (e, t, n, i, o) {
	  if (void 0 === o) {
	    o = .1;
	  }
	
	  var r = cc.moveTo(e, t, n);
	  return cc.sequence(r, cc.moveTo(o, t + i.width, n + i.height), cc.moveTo(o, t, n));
	}

}

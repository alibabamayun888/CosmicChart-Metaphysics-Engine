import { Singleton } from "./Singleton.js";
export class ArrayUtils extends Singleton {

	constructor(){

}


	forEach (e, t, n) {
	  for (var i = 0, o = e.length; i < o; i++) {
	    t.apply(n, [e[i]]);
	  }
	}

	removeItem (e, t) {
	  var n = e.indexOf(t);
	
	  if (n > -1) {
	    e.splice(n, 1);
	  }
	}

	delRepeatElement (e) {
	  var t,
	      n = e[0];
	  Number;
	  t = new Array();
	
	  for (var i = 0; i < e.length; i++) {
	    n = e[i];
	
	    if (-1 == t.indexOf(n)) {
	      t.push(n);
	    }
	  }
	
	  return t;
	}

}

import { Singleton } from "./Singleton.js";
export default class RandomUtils extends Singleton {

	constructor(){

}


	limit (e, t) {
	  e = Math.min(e, t);
	  var n = (t = Math.max(e, t)) - e;
	  return e + Math.random() * n;
	}

	limitInteger (e, t) {
	  return Math.round(this.limit(e, t));
	}

	randomArray (e) {
	  return e[Math.floor(Math.random() * e.length)];
	}

}

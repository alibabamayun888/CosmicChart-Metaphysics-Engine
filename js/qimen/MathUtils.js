import { Singleton } from "./Singleton.js";
export class MathUtils extends Singleton {

	constructor(){

}


	getAngle (e) {
	  return 180 * e / Math.PI;
	}

	getRadian (e) {
	  return e / 180 * Math.PI;
	}

	getRadian2 (e, t, n, i) {
	  var o = n - e,
	      r = i - t;
	  return Math.atan2(r, o);
	}

	getDistance (e, t, n, i) {
	  var o = n - e,
	      r = i - t,
	      a = o * o + r * r;
	  return Math.sqrt(a);
	}

	getDistanceByPoint (e, t) {
	  var n = e.x - t.x,
	      i = e.y - t.y,
	      o = n * n + i * i;
	  return Math.sqrt(o);
	}

	range (e, t) {
	  return Math.round(Math.random() * (t - e)) + e;
	}

}

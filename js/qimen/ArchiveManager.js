import { Singleton } from "./Singleton.js";
export class ArchiveManager extends Singleton {

	constructor(){

}


	setItem (e, t) {
	  cc.sys.localStorage.setItem(e, t);
	}

	getBoolean (e, t) {
	  if (void 0 === t) {
	    t = false;
	  }
	
	  var n = cc.sys.localStorage.getItem(e);
	
	  if (!n) {
	    return t;
	  }
	
	  if ("true" == n) {
	    return true;
	  }
	
	  if ("false" == n) {
	    return false;
	  }
	
	  throw new Error("错误boolean类型:" + n);
	}

	getNumber (e, t) {
	  if (void 0 === t) {
	    t = 0;
	  }
	
	  var n = cc.sys.localStorage.getItem(e);
	  return n ? Number(n) : t;
	}

	getString (e, t) {
	  if (void 0 === t) {
	    t = null;
	  }
	
	  return cc.sys.localStorage.getItem(e) || t;
	}

	removeItem (e) {
	  cc.sys.localStorage.removeItem(e);
	}

	clear () {
	  cc.sys.localStorage.clear();
	}

}

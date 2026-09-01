export class QueueExecutor  {

	constructor(){
this._functions = new Array();
}


	setCallBack (e, t) {
	  this._callBack = e;
	  this._callBackTarget = t;
	}

	regist (e, t) {
	  this._functions.push([e, t]);
	}

	start () {
	  this.next();
	}

	next () {
	  if (this._functions) {
	    if (0 == this._functions.length) {
	      if (this._callBack) {
	        this._callBack.call(this._callBackTarget);
	      }
	
	      this._callBack = null;
	      this._callBackTarget = null;
	      this._functions = null;
	    } else {
	      var e = this._functions.shift();
	
	      e[0].call(e[1]);
	    }
	  }
	}

}

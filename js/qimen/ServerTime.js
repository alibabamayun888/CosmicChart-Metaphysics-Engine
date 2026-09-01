

  function i() {
    return window && window.performance ? window.performance.now() : new Date().getTime();
  }

export class ServerTime  {

	constructor(e){
this._t = e;
this._t = new Date().getTime();
this._lastSetTime = i();
}


	setTime (e) {
	  this._t = e;
	  this._lastSetTime = i();
	}

	getTime () {
	  var e = i() - this._lastSetTime;
	
	  return this._t + e;
	}

}

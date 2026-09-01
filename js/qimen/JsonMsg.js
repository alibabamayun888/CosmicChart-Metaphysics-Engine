import { Singleton } from "./Singleton.js";
export class JsonMsg extends Singleton {

	constructor(){
this._sid = 0;
this.packetLst = [];
}


	receive (e, t) {
	  if (this.packetLst[e]) {
	    this.packetLst[e].excuteCall(t);
	  }
	}

	send (e, t, n) {
	  e.send(n);
	}

	decode () {
	  return null;
	}

	encode () {
	  return null;
	}

	bindNetListener (e, t, n) {
	  this.packetLst[e] = new a(t, n);
	}

	removeNetListener (e) {
	  delete this.packetLst[e];
	}

	resetSid () {
	  this._sid = 0;
	}

	getSid () {
	  return this._sid;
	}

}
class a  {

	constructor(e,t){
this.callFun = e;
this.sender = t;
}


	excuteCall (e) {
	  if (null != this.sender) {
	    if (this.sender.hasOwnProperty("node")) {
	      if (null == this.sender.node) {
	        return;
	      }
	
	      if (null != this.sender.node && !this.sender.node.isValid) {
	        return;
	      }
	    }
	
	    this.callFun.call(this.sender, e);
	  }
	}

}

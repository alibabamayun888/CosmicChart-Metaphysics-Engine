import { Singleton } from "./Singleton.js";
import { pbhall } from "./ProtoHall.js";
import { ScoketManager } from "./ScoketManager.js";
export class HeartbeatMgr extends Singleton {

	constructor(){
this.invalidTime = 0;
this.sumTime = 0;
this.timeOut = 50;
this.pingRate = 10;
}


	init () {
	  if (this.timer) {
	    this.uninit();
	  }
	
	  this.createTimer();
	  this.sendHeart = true;
	}

	pause () {
	  this.sendHeart = false;
	  this.invalidTime = 0;
	  this.sumTime = 0;
	
	  if (this.timer) {
	    this.removeTimer();
	  }
	}

	resume () {
	  this.sendHeart = true;
	  this.invalidTime = 0;
	  this.sumTime = 0;
	  this.createTimer();
	}

	uninit () {
	  this.sendHeart = false;
	  this.invalidTime = 0;
	  this.sumTime = 0;
	  this.removeTimer();
	}

	createTimer () {
	  if (this.timer) {
	    this.removeTimer();
	  }
	
	  this.timer = setInterval(this.doTimer.bind(this), 1e3);
	}

	removeTimer () {
	  clearInterval(this.timer);
	  this.timer = null;
	}

	doTimer () {
	  if (this.sendHeart) {
	    this.invalidTime++;
	    this.sumTime++;
	
	    if (this.sumTime > this.pingRate) {
	      this.sendheartbeat();
	      this.sumTime = 0;
	    }
	  }
	}

	sendheartbeat () {
	  var e = ScoketManager.getInstance();
	
	  if (e.getScoket().isConnected()) {
	    var t = new pbhall.Cheartbeat();
	    e.sendNoEncrypt(pbhall.Head.heartbeat, t, pbhall.Cheartbeat);
	  }
	}

}

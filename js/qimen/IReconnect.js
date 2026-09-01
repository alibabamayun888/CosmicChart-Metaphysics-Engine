import { IComponent } from "./IComponent.js";
export class IReconnect extends IComponent {

	constructor(){
this.index = 0;
}


	initView () {
	  this.labMsg = this.findChild("labMsg", cc.Label);
	}

	start () {
	  this.labMsg.string = "网络不稳定，正在努力加载中...";
	  this.schedule(this.connect, 1, cc.macro.REPEAT_FOREVER, 1);
	}

	connect () {
	  for (var e = "网络不稳定，正在努力加载中", t = 0; t < this.index % 4; t++) {
	    e += ".";
	  }
	
	  this.labMsg.string = e;
	
	  if (3 == this.index) {
	    this.reconnect();
	  }
	
	  if (++this.index > 7) {
	    this.index = 0;
	  }
	}

	setReconnectSuccCallFun (e) {
	  this.reconnectSuccCallFun = e;
	}

}

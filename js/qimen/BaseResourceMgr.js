import { Singleton } from "./Singleton.js";
import { ResourceUtils } from "./ResourceUtils.js";
import { CallFun } from "./CallFun.js";
export class BaseResourceMgr extends Singleton {

	constructor(){
this.resourceUtils = new ResourceUtils();
this.assetLst = new Array();
}


	preLoadRes (e, t) {
	  this.assetLst = [];
	  this.preLoadListener = [e, t];
	  this.loadRes(this.addRes());
	}

	destroyRes () {
	  this.assetLst.forEach(function (e) {
	    e.destroy();
	  });
	}

	getAsset (e) {
	  return this.assetLst[e];
	}

	putAsset (e, t) {
	  if (this.assetLst[e]) {
	    cc.error("该资源已经存在，重复添加：" + e);
	  } else {
	    this.assetLst[e] = t;
	  }
	}

	loadComplete () {}

	loadRes (e) {
	  var t = this;
	  this.resourceUtils.loadConfig(new CallFun(function (n) {
	    if (e) {
	      for (var i = 0; i < e.length; i++) {
	        t.assetLst[e[i]] = n[i];
	      }
	    }
	
	    t.loadComplete();
	    t.preLoadListener[0].apply(t.preLoadListener[1]);
	  }, this));
	}

}

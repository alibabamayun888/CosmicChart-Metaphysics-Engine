import { eventMgr } from "./App.js";
import { EventConst } from "./EventConst.js";
import { mClient } from "./HttpServer.js";
import { MsgHead } from "./NetMessage.js";
import { user } from "./User.js";
import { ILayer } from "./ILayer.js";
export class AlterHeadPortraitLy extends ILayer {

	constructor(){
this.selectIndex = "0";
this.headLst = new Array();
}


	initView () {
	  this.addClick("button/btnCancel", this.backLastLayer);
	  this.addClick("button/btnSure", this.btnSureClick);
	
	  for (var e = 0; e <= 7; e++) {
	    var t = this.findChild("scrollView/view/content/head_" + e);
	    t.addComponent(cc.Button);
	    this.addClick(t, this.headClick);
	    this.headLst.push(t);
	  }
	}

	onEnable () {
	  this.selectIndex = user.userBean.headPortrait;
	  this.doselectHead(this.selectIndex);
	}

	start () {
	  mClient.bindNet(MsgHead.alterHeadPortrait, this.alterHeadPortraitNet, this);
	}

	doselectHead (e) {
	  var t = this;
	  this.headLst.forEach(function (n) {
	    var i = t.findChildByParent(n, "select"),
	        o = n.name.substr(5);
	    i.active = o == e;
	  });
	}

	headClick (e) {
	  var t = e.node.name.substr(5);
	  this.selectIndex = t;
	  this.doselectHead(this.selectIndex);
	}

	btnSureClick () {
	  mClient.sendalterHeadPortrait(this.selectIndex);
	}

	alterHeadPortraitNet (e) {
	  var t = e.headPortrait;
	  user.userBean.headPortrait = t;
	  eventMgr.raiseEvent(EventConst.updateUserInfo);
	  this.backLastLayer();
	}

}

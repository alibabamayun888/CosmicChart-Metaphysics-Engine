import { promotMgr } from "./App.js";
import { mClient } from "./HttpServer.js";
import { MsgHead } from "./NetMessage.js";
import { CallFun } from "./CallFun.js";
import { CeSuanOrderUtil } from "./CeSuanOrderUtil.js";
import { CeSuanPriceTipLy } from "./CeSuanPriceTipLy.js";
import { IFFSMOrderLy } from "./IFFSMOrderLy.js";
import { XmpdLy } from "./XmpdLy.js";
export class XmpdOrderLy extends IFFSMOrderLy {

	constructor(){

}


	initView () {
	  e.prototype.initView.call(this);
	  var t = "scrollView/view/content/";
	  this.man_labName = this.findChild(t + "info/manInfo/labName", cc.Label);
	  this.woman_labName = this.findChild(t + "info/womanInfo/labName", cc.Label);
	  this.addClick(t + "ceSuan/btnCeSuan", this.btnCeSuanClick);
	}

	initData () {
	  mClient.bindNet(MsgHead.xmpd, this.xmpdNet, this);
	}

	setBean (e) {
	  this.bean = e;
	  this.man_labName.string = e.manXing + e.manMing;
	  this.woman_labName.string = e.womanXing + e.womanMing;
	}

	btnCeSuanClick () {
	  if (this.isLogin()) {
	    var e = CeSuanOrderUtil.instance.getCeSuanPro(CeSuanOrderUtil.cesuan_pro_xmpd),
	        t = this,
	        n = new CallFun(function () {
	      mClient.sendxmpd(t.bean.manXing, t.bean.manMing, t.bean.womanXing, t.bean.womanMing, t.bean.manSanCai, t.bean.womanSanCai, t.bean.guaShu);
	    }, this);
	    CeSuanPriceTipLy.create(this.node, function (t) {
	      t.display(e.name, e.price, n);
	    }, this);
	  }
	}

	xmpdNet (e) {
	  XmpdLy.instance.popxmpdFindLy(this.bean, e);
	  promotMgr.hideLoading();
	}

}

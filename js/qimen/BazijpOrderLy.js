import { promotMgr } from "./App.js";
import { mClient } from "./HttpServer.js";
import { MsgHead } from "./NetMessage.js";
import { CallFun } from "./CallFun.js";
import { CeSuanOrderUtil } from "./CeSuanOrderUtil.js";
import { CeSuanPriceTipLy } from "./CeSuanPriceTipLy.js";
import { IFFSMOrderLy } from "./IFFSMOrderLy.js";
import { BazijpLy } from "./BazijpLy.js";
export class BazijpOrderLy extends IFFSMOrderLy {

	constructor(){

}


	initView () {
	  e.prototype.initView.call(this);
	  var t = "scrollView/view/content/";
	  this.name_labValue = this.findChild(t + "info/name/labValue", cc.Label);
	  this.sex_labValue = this.findChild(t + "info/sex/labValue", cc.Label);
	  this.birthday_labValue = this.findChild(t + "info/birthday/labValue", cc.Label);
	  this.addClick(t + "btnCeSuan", this.btnCeSuanClick);
	}

	initData () {
	  mClient.bindNet(MsgHead.bazijp, this.bazijpNet, this);
	}

	setBean (e) {
	  this.bean = e;
	  this.name_labValue.string = e.name;
	  this.sex_labValue.string = e.sex;
	  this.birthday_labValue.string = e.getCDateStr();
	}

	btnCeSuanClick () {
	  if (this.isLogin()) {
	    var e = CeSuanOrderUtil.instance.getCeSuanPro(CeSuanOrderUtil.cesuan_pro_bazijp),
	        t = this,
	        n = new CallFun(function () {
	      mClient.sendbazijp(t.bean);
	    }, this);
	    CeSuanPriceTipLy.create(this.node, function (t) {
	      t.display(e.name, e.price, n);
	    }, this);
	  }
	}

	bazijpNet (e) {
	  BazijpLy.instance.popbazijpFindLy(this.bean, e);
	  promotMgr.hideLoading();
	}

}

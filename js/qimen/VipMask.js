import { user } from "./User.js";
import IComponent from "./IComponent.js";
import { PaiPanLy } from "./PaiPanLy.js";
export class VipMask extends IComponent {

	constructor(){

}


	initView () {
	  this.openVipTip = this.findChild("openVipTip");
	  this.loginTip = this.findChild("loginTip");
	  this.addClick("openVipTip/btnOpenVip", this.btnOpenVipClick);
	  this.addClick("loginTip/btnLogin", this.btnLoginClick);
	}

	initData () {
	  if (user.isLogin) {
	    this.openVipTip.active = true;
	    this.loginTip.active = false;
	  } else {
	    this.openVipTip.active = false;
	    this.loginTip.active = true;
	  }
	}

	btnOpenVipClick () {
	  PaiPanLy.instance.doOpenVip();
	}

	btnLoginClick () {
	  PaiPanLy.instance.doLogin();
	}

}

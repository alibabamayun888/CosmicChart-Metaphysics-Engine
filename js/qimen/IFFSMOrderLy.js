import { promotMgr } from "./App.js";
import { user } from "./User.js";
import ILayer from "./ILayer.js";
import { QiMenSce } from "./QiMenSce.js";
export class IFFSMOrderLy extends ILayer {

	constructor(){

}


	initView () {
	  this.addClick("upNode/btnBack", this.btnCloseClick);
	}

	isLogin () {
	  if (!user.isLogin) {
	    promotMgr.oneButtonLabTip("您的账号尚未登录，请先登陆账号", function () {
	      QiMenSce.instance.showMineLoginLy();
	    }, this).setBtnSureTxt("去登陆");
	    return false;
	  }
	
	  return true;
	}

	btnCloseClick () {
	  this.backLastLayer();
	}

}

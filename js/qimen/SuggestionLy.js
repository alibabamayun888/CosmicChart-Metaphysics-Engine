import App, { promotMgr } from "./App.js";
import { mClient } from "./HttpServer.js";
import ILayer from "./ILayer.js";
export class SuggestionLy extends ILayer {

	constructor(){
this.layerName = {
  commonProblemLy: "commonProblemLy"
};
}


	initView () {
	  this.addClick("upNode/btBack", this.backLastLayer);
	  this.addClick("upNode/btnCommonProblem", this.btnCommonProblemClick);
	  this.addClick("upNode/btSure", this.btSureClick);
	  this.edtContent = this.findChild("upNode/content/edtContent", cc.EditBox);
	  this.edtContactWay = this.findChild("upNode/contactWay/edtContactWay", cc.EditBox);
	  this.labZiShu = this.findChild("upNode/labZiShu", cc.Label);
	  this.findChild(this.layerName.commonProblemLy).addComponent(l);
	}

	start () {
	  this.edtContent.node.on("text-changed", this.text_changed, this);
	}

	onEnable () {
	  this.edtContent.string = "";
	  this.edtContactWay.string = "";
	}

	text_changed () {
	  this.labZiShu.string = this.edtContent.string.length + "/" + this.edtContent.maxLength;
	}

	btnCommonProblemClick () {
	  this.popLayer(this.layerName.commonProblemLy);
	}

	btSureClick () {
	  var e = this.edtContent.string,
	      t = this.edtContactWay.string;
	
	  if (0 == e.length) {
	    promotMgr.oneButtonLabTip("请输入您的建议");
	  } else {
	    mClient.sendsuggestion(App.CommonUtils.httpEncode64(e), t);
	    promotMgr.floatingTip("建议发送成功，谢谢您对我们的支持");
	    this.backLastLayer();
	  }
	}

}
class l extends ILayer {

	constructor(){

}


	initView () {
	  this.addClick("upNode/btnBack", this.backLastLayer);
	}

}

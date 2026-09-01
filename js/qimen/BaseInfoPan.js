import { PaiPanLy } from "./PaiPanLy.js";
import { InfoArea, IBaseQiMenPan, PanArea } from "./PanArea.js";
import { qimen } from "./QiMen.js";
export class BaseInfoPan extends IBaseQiMenPan {

	constructor(){

}


	get isScaleBig () {
  return this.panArea.isScaleBig;
}

	initView () {
	  e.prototype.initView.call(this);
	  this.infoArea = this.findChild("scrollView/view/content/infoArea").addComponent(InfoArea);
	  this.panArea = this.findChild("scrollView/view/content/panArea").addComponent(l);
	}

	start () {
	  this.node.color = cc.Color.BLACK.fromHEX(qimen.localData.setBean.paiPanBackColor);
	  this.paiPanBean = PaiPanLy.instance.paiPanBean;
	  this.refresh();
	}

	refresh () {
	  if (this.panArea) {
	    this.infoArea.init(this.paiPanBean);
	    this.panArea.init(this.leftRightSlide);
	  }
	}

}
class l extends PanArea {

	constructor(){

}


	initView () {
	  e.prototype.initView.call(this);
	}

}

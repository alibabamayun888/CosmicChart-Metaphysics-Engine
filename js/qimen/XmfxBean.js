import App from "./App.js";
import { XMBiHuaBean } from "./XMBiHuaBean.js";
export class XmfxBean  {

	constructor(e,t,n){
this.xingShi = e;
this.mingZi = t;
this.baZiBean = n;
this.xmBiHuaLst = this.calBiHua(e, t);
this.tianRenDiGeLst = this.calTianDiRenGe(this.xmBiHuaLst);
this.tianDiRenGeWuXingLst = this.calTianDiRenGeWuXing(this.tianRenDiGeLst);
this.sanCai = this.calSanCai(this.tianRenDiGeLst);
}


	calBiHua (e, t) {
	  var n = new Array();
	
	  if (1 == e.length) {
	    n.push(new XMBiHuaBean("1"));
	    n.push(new XMBiHuaBean(e));
	  } else {
	    n.push(new XMBiHuaBean(e.substr(0, 1)));
	    n.push(new XMBiHuaBean(e.substr(1, 1)));
	  }
	
	  if (1 == t.length) {
	    n.push(new XMBiHuaBean(t.substr(0, 1)));
	    n.push(new XMBiHuaBean("1"));
	  } else {
	    n.push(new XMBiHuaBean(t.substr(0, 1)));
	    n.push(new XMBiHuaBean(t.substr(1, 1)));
	  }
	
	  return n;
	}

	calTianDiRenGe (e) {
	  return [e[0].biHua + e[1].biHua, e[1].biHua + e[2].biHua, e[2].biHua + e[3].biHua, e[0].biHua + e[3].biHua, e[0].biHua + e[1].biHua + e[2].biHua + e[3].biHua];
	}

	calTianDiRenGeWuXing (e) {
	  return [App.XingMingUtils.getsancai_133(e[0]), App.XingMingUtils.getsancai_133(e[1]), App.XingMingUtils.getsancai_133(e[2]), App.XingMingUtils.getsancai_133(e[3]), App.XingMingUtils.getsancai_133(e[4])];
	}

	calSanCai (e) {
	  return App.XingMingUtils.getsancai_133(e[0]) + App.XingMingUtils.getsancai_133(e[1]) + App.XingMingUtils.getsancai_133(e[2]);
	}

	getWaiGeNum () {
	  return this.tianRenDiGeLst[3];
	}

}

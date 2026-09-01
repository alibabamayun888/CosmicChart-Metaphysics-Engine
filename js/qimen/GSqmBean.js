import App from "./App.js";
import { FFSMBaZiBean } from "./FFSMBaZiBean.js";

export class GSNameFXBean {}

export function GSqmBean (e, t, n, a) {
  for (var s = App.HanZiUtils, u = 0, l = new Array(), c = 0; c < t.length; c++) {
    var h = t.substr(c, 1);

    if (s.isFt(h)) {
      h = s.ft2jt(h);
    }

    var p = s.jt2ft(h),
        d = s.getPinYinByJt(h)[1].toLowerCase(),
        f = s.getWXByJt(h),
        g = s.getFtBiHuaByJt(h);
    u += g[0];
    var y = new GSNameFXBean();
    y.jt = h;
    y.ft = p;
    y.pinYin = d;
    y.wx = f;
    y.biHua = g[0];
    l.push(y);
  }

  this.gsname = t;
  this.baziBean = new FFSMBaZiBean(e, n, a);
  this.gsnameBeanLst = l;
  this.allBiHua = u;
};

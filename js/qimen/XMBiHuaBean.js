import App from "./App.js";

export function XMBiHuaBean (e) {
  this.name = e;

  if ("1" == e) {
    this.biHua = 1;
  } else {
    this.biHua = App.HanZiUtils.getFtBiHuaByJt(e)[0];
  }
};

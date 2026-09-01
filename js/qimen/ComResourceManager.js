import { BaseResourceMgr } from "./BaseResourceMgr.js";
import { RESTYPE } from "./ResInterface.js";
export class ComResourceManager extends BaseResourceMgr {

	constructor(){
this.prefabKeys = {
  btnTip: "common/prefab/btnTip",
  floatingTip: "common/prefab/floatingTip",
  easyLoading: "common/prefab/easyLoading"
};
}


	addRes () {
	  var e = [];
	
	  for (var t in this.prefabKeys) {
	    this.resourceUtils.addConfig(this.prefabKeys[t], RESTYPE.Prefab);
	    e.push(this.prefabKeys[t]);
	  }
	
	  return e;
	}

}

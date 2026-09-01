import { Singleton } from "./Singleton.js";
import { StageUtils } from "./StageUtils.js";


  var s = function (e, t) {
    this.path = e;
    this.t = t;
  };

export class SceneName  {

	static qimen = new s("qimen", "QiMenSce")

	constructor(){

}


}
export class SceneManager extends Singleton {

	constructor(){

}


	get curScene () {
  return this._curSce;
}

	get curSceneBean () {
  return this._curSceneBean;
}

	get lastSceneBean () {
  return this._lastSceneBean;
}

	loadScene (e, t) {
	  if (void 0 === t) {
	    t = null;
	  }
	
	  if (this._curSceneBean) {
	    this._lastSceneBean = this._curSceneBean;
	  }
	
	  this._curSceneBean = e;
	  var n = this;
	  cc.director.loadScene(e.path, function () {
	    var i = cc.find("Canvas").getComponent(cc.Canvas);
	    n._curSce = i.addComponent(e.t);
	
	    var o = n._curSce.findChild("background");
	
	    if (o) {
	      StageUtils.getInstance().setFullScreen(o);
	    }
	
	    if (t) {
	      t.call();
	    }
	  });
	}

	clearCache () {
	  this._curSce = null;
	  this._curSceneBean = null;
	  this._lastSceneBean = null;
	}

}

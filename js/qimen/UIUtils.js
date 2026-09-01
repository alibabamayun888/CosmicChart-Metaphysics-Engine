export class UIUtils  {

	constructor(){

}


	static setLabel (e, t) {
	  if ("number" == typeof t) {
	    t = t.toString();
	  } else {
	    if (null == t) {
	      t = "";
	    }
	  }
	
	  if (e.getComponent(cc.RichText)) {
	    var n = e.color.toHEX("#rrggbb");
	    e.getComponent(cc.RichText).string = "<color=" + n + ">" + t + "</c>";
	  } else {
	    e.getComponent(cc.Label).string = t;
	  }
	}

	static stripLengthWithSuffix (e, t, n, i) {
	  if (void 0 === i) {
	    i = "...";
	  }
	
	  var o = e.getComponent(cc.Label);
	  o.string = i;
	  var r = e.getContentSize().width;
	  o.string = t;
	  var a = e.getContentSize().width;
	
	  if (a > n) {
	    for (var s = 0; s < t.length; s++) {
	      var u = t.substr(0, s + 1);
	      o.string = u;
	
	      if ((a = e.getContentSize().width + r) > n) {
	        o.string = t.substr(0, s) + i;
	        break;
	      }
	    }
	  }
	}

	static setBtnGrayState (e, t) {
	  var n = e.getComponent(cc.Button);
	
	  if (n) {
	    n.interactable = !t;
	    n.enableAutoGrayEffect = t;
	  }
	}

	static isBtnGray (e) {
	  var t = e.getComponent(cc.Button);
	  return !!t && !t.interactable;
	}

	static setBtnEnable (e, t) {
	  var n;
	  (n = e instanceof cc.Node ? e.getComponent(cc.Button) : e).enabled = t;
	  n.interactable = t;
	}

	static labelForceUpdateRenderData (e) {
	  e._forceUpdateRenderData();
	}

}

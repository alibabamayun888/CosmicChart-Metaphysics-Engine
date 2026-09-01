export class WebView  {

	constructor(){
this.filePath = "com/qihuo/CCWebView";
this.filePath = "MWebView";
}


	static get instance () {
  if (null == WebView._instance) {
    WebView._instance = new WebView();
  }

  return WebView._instance;
}

	open (e) {
	  if (!cc.sys.isMobile) {
	    cc.sys.openURL(e);
	  }
	
	  if (cc.sys.os == cc.sys.OS_ANDROID) {
	    jsb.reflection.callStaticMethod(this.filePath, "jsb_openWebView", "(Ljava/lang/String;)V", e);
	  } else {
	    if (cc.sys.os == cc.sys.OS_IOS) {
	      jsb.reflection.callStaticMethod(this.filePath, "jsb_openWebView:", e);
	    }
	  }
	}

	openURLOutside (e) {
	  if (cc.sys.os == cc.sys.OS_IOS) {
	    jsb.reflection.callStaticMethod(this.filePath, "jsb_openURLOutside:", e);
	  } else {
	    cc.sys.openURL(e);
	  }
	}

}

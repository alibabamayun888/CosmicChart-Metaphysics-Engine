import { Singleton } from "./Singleton.js";
export class DeviceUtils extends Singleton {

	constructor(){

}


	get IsHtml5 () {
  return cc.sys.isBrowser;
}

	get IsNative () {
  return cc.sys.isNative;
}

	get IsMobile () {
  return cc.sys.isMobile;
}

	get IsPC () {
  return !cc.sys.isMobile;
}

	get IsQQBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MQQBrowser");
}

	get IsIEBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MSIE");
}

	get IsFirefoxBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Firefox");
}

	get IsChromeBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Chrome");
}

	get IsSafariBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Safari");
}

	get IsOperaBrowser () {
  return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Opera");
}

}

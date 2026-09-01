import { mClient } from "./HttpServer.js";
import { MsgHead } from "./NetMessage.js";
import { user } from "./User.js";
export class VisitorLogin  {

	constructor(){

}


	static get instance () {
  if (!VisitorLogin._instance) {
    VisitorLogin._instance = new VisitorLogin();
  }

  return VisitorLogin._instance;
}

	bindLoginNet (e) {
	  this.succCallFun = e;
	}

	sendlogin (e) {
	  if (void 0 === e) {
	    e = null;
	  }
	
	  mClient.sendvisitorLogin(e);
	}

	visitorLoginNet (e) {
	  user.setUserData(e.userBean, null, null);
	
	  if (this.succCallFun) {
	    this.succCallFun.call();
	  }
	}

}

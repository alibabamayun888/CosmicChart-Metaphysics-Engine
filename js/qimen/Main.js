import { GlobalManager } from "./GlobalManager.js";

import { _decorator } from 'cc';
@ccclass
export default class Main extends cc.Component {

	start () {
	  cc.debug.setDisplayStats(false);
	  cc.find("GlobalManager").addComponent(GlobalManager);
	}

}

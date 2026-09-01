import { ILayer } from "./ILayer.js";
export class IFFSMFindLy extends ILayer {

	constructor(){

}


	initView () {
	  this.addClick("upNode/btnBack", this.backLastLayer);
	}

}

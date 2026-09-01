import { Singleton } from "./Singleton.js";
export class ServerManager extends Singleton {

	constructor(){
this._lst = {};
}


	setUrl (e, t) {
	  this._lst[e] = t;
	}

	getUrl (e) {
	  return this._lst[e];
	}

}

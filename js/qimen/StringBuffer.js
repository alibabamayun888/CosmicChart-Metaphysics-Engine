export class StringBuffer  {

	constructor(){
this._strings = new Array();
}


	append (e) {
	  this._strings.push(e);
	}

	toString () {
	  return this._strings.join("");
	}

	clear () {
	  this._strings.length = 0;
	}

}

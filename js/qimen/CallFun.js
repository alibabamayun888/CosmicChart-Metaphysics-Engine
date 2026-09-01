export class CallFun  {

	constructor(e,t){
this.fun = e;
this.sender = t;
}


	call (e) {
	  return null == e || null == e ? this.fun.call(this.sender) : this.fun.call(this.sender, e);
	}

}

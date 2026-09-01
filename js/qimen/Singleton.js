export class Singleton  {

	constructor(){

}


	static getInstance () {
	  for (var e = [], t = 0; t < arguments.length; t++) {
	    e[t] = arguments[t];
	  }
	
	  var n = this;
	
	  if (!n._instance) {
	    var i = e.length;
	
	    if (0 == i) {
	      n._instance = new n();
	    } else {
	      if (1 == i) {
	        n._instance = new n(e[0]);
	      } else {
	        if (2 == i) {
	          n._instance = new n(e[0], e[1]);
	        } else {
	          if (3 == i) {
	            n._instance = new n(e[0], e[1], e[2]);
	          } else {
	            if (4 == i) {
	              n._instance = new n(e[0], e[1], e[2], e[3]);
	            } else {
	              if (5 == i) {
	                n._instance = new n(e[0], e[1], e[2], e[3], e[4]);
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  return n._instance;
	}

}

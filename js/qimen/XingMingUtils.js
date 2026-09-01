import { Singleton } from "./Singleton.js";
export class XingMingUtils extends Singleton {

	constructor(){

}


	getsancai_133 (e) {
	  var t;
	
	  switch (e % 10) {
	    case 1:
	    case 2:
	      t = "木";
	      break;
	
	    case 3:
	    case 4:
	      t = "火";
	      break;
	
	    case 5:
	    case 6:
	      t = "土";
	      break;
	
	    case 7:
	    case 8:
	      t = "金";
	      break;
	
	    case 9:
	    case 10:
	    case 0:
	      t = "水";
	  }
	
	  return t;
	}

}

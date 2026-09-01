export class CalendarUtil  {

	constructor(){

}


	static tolunarInfo (e, t, n) {
	  if (12 != e.length) {
	    return null;
	  }
	
	  var i = e;
	
	  if (n) {
	    i = n + i;
	  }
	
	  if (t) {
	    for (var o = t.toString(2); o.length < 4;) {
	      o = "0" + o;
	    }
	
	    i += o;
	  } else {
	    i += "0000";
	  }
	
	  var r = parseInt(i, 2).toString(16);
	
	  if (4 == r.length) {
	    r = "0" + r;
	  }
	
	  return "0x" + r;
	}

	static tosTermInfo (e) {
	  if (24 != e.length) {
	    return null;
	  }
	
	  for (var t = "", n = 0; n < e.length; n += 4) {
	    var i = e[n] + "",
	        o = e[n + 1] + "",
	        r = e[n + 2] + "",
	        a = e[n + 3] + "";
	    t += Number(i + o + r + a).toString(16);
	  }
	
	  return t;
	}

}

export class ZPromise  {

	constructor(){

}


	delay (e) {
	  if (void 0 === e) {
	    e = 200;
	  }
	
	  return i(this, void 0, void 0, function () {
	    return o(this, function (t) {
	      switch (t.label) {
	        case 0:
	          return [4, new Promise(function (t) {
	            setTimeout(function () {
	              return t(0);
	            }, e);
	          })];
	
	        case 1:
	          t.sent();
	          return [2];
	      }
	    });
	  });
	}

}

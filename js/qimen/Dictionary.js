import List from "./List.js";


  var r = function (e, t) {
    this.key = e;
    this.value = t;
  };

export default class Dictionary  {

	constructor(){
this.array = new List();
}


	get size () {
  return this.array.size;
}

	get keys () {
  var e;

  if (this.array.size > 0) {
    e = new List();

    for (var t = 0; t < this.array.size; t++) {
      var n = this.array.getAt(t);
      e.add(n.key);
    }
  }

  return e;
}

	get values () {
  var e;

  if (this.array.size > 0) {
    e = new List();

    for (var t = 0; t < this.array.size; t++) {
      var n = this.array.getAt(t);
      e.add(n.value);
    }
  }

  return e;
}

	put (e, t) {
	  for (var n = new r(e, t), i = 0; i < this.array.size; i++) {
	    var o = this.array.getAt(i);
	
	    if (o.key == e) {
	      o.value = t;
	      return;
	    }
	  }
	
	  this.array.add(n);
	}

	getValue (e) {
	  for (var t = null, n = 0; n < this.array.size; n++) {
	    var i = this.array.getAt(n);
	
	    if (i.key == e) {
	      t = i.value;
	      break;
	    }
	  }
	
	  return t;
	}

	containsKey (e) {
	  for (var t = 0; t < this.array.size; t++) {
	    if (this.array.getAt(t).key == e) {
	      return true;
	    }
	  }
	
	  return false;
	}

	remove (e) {
	  for (var t, n = 0; n < this.array.size; n++) {
	    var i = this.array.getAt(n);
	
	    if (i.key == e) {
	      t = i.value;
	      this.array.removeAt(n);
	      break;
	    }
	  }
	
	  return t;
	}

	clear () {
	  this.array.clear();
	}

}

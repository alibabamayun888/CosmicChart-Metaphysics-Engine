export class FilterWord  {

	constructor(e){
this.words = null;
e = (e = e.trimLeft().trimRight()).replace("\r", "");
this.words = e.split("\n");
}


	check (e) {
	  for (var t = 0; t < this.words.length; t++) {
	    var n = this.words[t].trimLeft().trimRight();
	
	    if (-1 != e.indexOf(n)) {
	      return true;
	    }
	  }
	
	  return false;
	}

}

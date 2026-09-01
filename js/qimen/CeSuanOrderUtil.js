

  var o = function () {};

export class CeSuanOrderUtil  {

	static cesuan_pro_bazijp = 0

	static cesuan_pro_gsqm = 1

	static cesuan_pro_xmpd = 2

	static cesuan_pro_bzyy = 3

	static cesuan_pro_hehun = 4

	static cesuan_pro_yinyuancs = 5

	static cesuan_pro_bazijingpi = 6

	static cesuan_pro_xmfx = 7

	static cesuan_pro_ffqm = 8

	constructor(){
this.priceMap = new Array();
i.type = Number(n[0]);
i.name = n[1];
i.price = Number(n[2]);
this.priceMap[i.type] = i;
}


	static get instance () {
  if (!CeSuanOrderUtil._instance) {
    CeSuanOrderUtil._instance = new CeSuanOrderUtil();
  }

  return CeSuanOrderUtil._instance;
}

	getCeSuanPro (e) {
	  return this.priceMap[e];
	}

}

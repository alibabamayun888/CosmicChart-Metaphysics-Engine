
export const RESTYPE = cc.Enum({
  Prefab: 0,
  SpriteAtlas: 1,
  SpriteFrame: 2,
  Font: 3,
  Txt: 4,
  AudioClip: 5,
  Json: 6,
  Asset: 7
});
export class AssetBean  {

	constructor(e){
this._pathName = e;
}


	get asset () {
  return this._asset;
}

	get pathName () {
  return this._pathName;
}

	setAsset (e) {
	  this._asset = e;
	}

}
export class PrefabBean extends AssetBean {

	constructor(t,n){
i._clsType = n;
}


	get clsType () {
  return this._clsType;
}

}

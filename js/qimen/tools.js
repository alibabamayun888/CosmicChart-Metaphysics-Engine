function trim(e) {
return e.replace(/(^\s*)|(\s*$)/g, "");
}

function year2Ayear(e) {
var t = String(e).replace(/[^0-9Bb\*-]/g, ""), r = t.substr(0, 1);
if ("B" == r || "b" == r || "*" == r) {
if ((t = 1 - t.substr(1, t.length)) > 0) {
alert("通用纪法的公元前纪法从B.C.1年开始。并且没有公元0年");
return -1e4;
}
} else t -= 0;
if (t < -4712) {
alert("不得小于B.C. 4713");
return -1e4;
}
t > 9999 && alert("超过9999年的农历计算很不准。");
return t;
}

function Ayear2year(e) {
return (e -= 0) <= 0 ? "B" + (1 - e) : "" + e;
}

function timeStr2hour(e) {
var t, r, n;
1 == (e = (e = String(e).replace(/[^0-9:\.]/g, "")).split(":")).length ? (t = e[0].substr(0, 2) - 0, 
r = e[0].substr(2, 2) - 0, n = e[0].substr(4, 2) - 0) : 2 == e.length ? (t = e[0] - 0, 
r = e[1] - 0, n = 0) : (t = e[0] - 0, r = e[1] - 0, n = e[2] - 0);
return t + r / 60 + n / 3600;
}

function getCookie(e) {
var t, r, n = document.cookie;
if (-1 == (t = n.indexOf(e + "="))) return "";
t += e.length + 1;
-1 == (r = n.indexOf(";", t)) && (r = n.length);
return unescape(n.substring(t, r));
}

function setCookie(e, t) {
var r = new Date();
r.setTime(r.getTime() + 6048e7);
document.cookie = e + "=" + escape(t) + ";expires=" + r.toGMTString();
}

function addOp(e, t, r) {
var n = document.createElement("OPTION");
n.value = t;
n.text = r;
e.add(n);
}
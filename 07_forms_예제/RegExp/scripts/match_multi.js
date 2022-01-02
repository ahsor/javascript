var p = /^[0-9]{1,}/g;
//var p = /^[0-9]{1,}/gm;
var str = '101마리의 강아지.\n7명의 난장이';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

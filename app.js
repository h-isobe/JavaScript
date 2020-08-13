var hello = "Hellor World"
alert(hello);

var str1 = "Hello";
var str2 = "World";
alert(str1 + str2);

var orange = 100;
var apple = 120;
if (orange < apple){
  alert("みかんはりんごより安い");
}
else if (orange == apple){
  alert("みかんとりんごは同じ値段");
}
  else {
  alert("みかんはりんごより高い");
}

var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello " + strA;
  return addStr
}

var promptStr = prompt("何か好きな文字を入れて下さい。");
alert(promptStr);
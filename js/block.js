
//alert("clicked");
var obj;
if(JSON.parse(localStorage.getItem("link")) == null)
	obj = new Array();
else
	obj = JSON.parse(localStorage.getItem("link"));
obj.push(document.URL);
localStorage.setItem("link", JSON.stringify(obj));
alert("URL Blocked:" + document.URL);
//alert("URL Added: " + JSON.parse(localStorage.getItem("link")));

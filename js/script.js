

//alert("URL Added: " + localStorage.getItem("link"));
var anchor = document.getElementsByTagName('a');
var link = JSON.parse(localStorage.getItem("link"));
var i;
for(j = 0; j < link.length; j++){

	//alert(anchor[i]);
	//alert(localStorage.getItem("link"));
	
	for(i = 0; i < anchor.length; i++){
		//alert(link[j]);
		if(anchor[i].href == link[j]){
			anchor[i].removeAttribute("href");
			anchor[i].setAttribute("style", "color:red;text-decoration:none;cursor:default;");
		}
	}
}
//console.log('retrieved:' + JSON.parse(localStorage.getItem(link)));

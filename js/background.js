chrome.browserAction.onClicked.addListener(
				function(tab)
				{
					chrome.tabs.executeScript(null, {file: "jquery-1.11.2.js"});
					chrome.tabs.executeScript(null, {file: "block.js"});
						
				});

function init() {

	//set default value for number of tabs
	if (localStorage.maxTabs == undefined) {
		localStorage.maxTabs = "http://www.iiita.ac.in"; // default
	}
	
	
	// set the id of the current tab
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, function (tabs) {
		currentTabId = tabs[0].id;
	});
	
	
}
/*function checkTabAdded(newTabId) {
	
	// check tabs of current window
	chrome.tabs.query({ currentWindow: true }, function(tabs) {

	/*	//to ignore the pinned tab
		tabs = tabs.filter(function (tab) {
			return !tab.pinned;
		});
		
		
		// debugLog("num of tabs: " +tabs.length)
		
		// tab removal criterion
		alert(localStorage.getItem("link"));
		var anchor = document.getElementsByTagName('a');
		var i;
		for(i = 0; i < anchor.length; i++){
			if(anchor[i].href == localStorage.getItem("link")){
				anchor[i].removeAttribute("href");
				anchor[i].setAttribute("style", "text-decoration:none;cursor:default;");
			}
		}
		
	});
}	*/	
chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.executeScript(null, {file: "script.js"});
});
chrome.tabs.onUpdated.addListener(function(activeInfo){
	chrome.tabs.executeScript(null, {file: "script.js"});
});
chrome.windows.onFocusChanged.addListener(function(windowId) {
	chrome.tabs.executeScript(null, {file: "script.js"});
});		
chrome.tabs.onCreated.addListener(function(tab) {
	//debugLog("tab " + tab.id + " created");
	//createTimes(tab.id);
	//updateTimes();
	//checkTabAdded(tab.id); // contains updateBadge
	chrome.tabs.executeScript(null, {file: "script.js"});
});
chrome.tabs.onAttached.addListener(function(tab) {
	//debugLog("tab " + tab.id + " attached");
	//checkTabAdded(tab.id); // contains updateBadge
	chrome.tabs.executeScript(null, {file: "script.js"});
});
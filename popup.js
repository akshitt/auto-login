chrome.browserAction.onClicked.addListener(function(activeTab){

  var newURL = "https://internet.iitb.ac.in/index.php";
  chrome.tabs.create({ url: newURL},function(tab){
  	
        chrome.tabs.executeScript(tab.id,{code:
 `javascript: (function() {function fill(element, val) { document.getElementsByName(element)[0].value = val; } fill("uname", "login_id"); fill("passwd", "your_password");document.getElementsByName("auth")[0].submit();})();
		`
  },function(results){
            //Now that we are done with processing, make the tab active. This will
            //  close/destroy the popup.
            chrome.tabs.update(tab.id,{active:true});
        });
});
});









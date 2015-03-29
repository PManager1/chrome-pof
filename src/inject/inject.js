chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		
		$("input:eq(3)").click();
		console.log(' $ = ', $);
    setInterval(function(){ $("input:eq(3)").click(); }, 2000);

    // alert('loaded'); 

	}
	}, 10);
});
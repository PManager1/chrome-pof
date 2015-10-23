chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js  3");
		// ----------------------------------------------------------


		$("input:eq(3)").click();
		console.log(' $ = ', $);

		// $("input[name='votea']").click(); 
		
		setInterval(function(){ $("input[name='votea']").click();  }, 2500);

    // setInterval(function(){ $("input:eq(3)").click(); }, 2500);

    // alert('loaded'); 

	}
	}, 10);
});

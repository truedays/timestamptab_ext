chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("🕑 TimestampTab>> " + document.title + ': ' + Date().substr(4,20));
		document.title=document.title + " 🕑 " + Date().substr(4,17);
		// ----------------------------------------------------------

	}
	}, 10);
});

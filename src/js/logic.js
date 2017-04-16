var onLoadCompleted = function(callback) {
	document.onreadystatechange = function(e) {
		if (e.target.readyState == "complete") {
			callback.call(e.target);
		}
	}
}

var onLoadCompleted = function(callback) {
	document.onreadystatechange = function(e) {
		if (e.target.readyState == "complete") {
			callback.call(e.target);
		}
	}
}

var loadNavigation = function() {
	var navigation = new Navigation("header nav");
}

var loadGalleries = function() {
	var gallery_unor2015 = new Gallery(
		"#photos", 
		{
			title: "Únor 2015",
			expanded: false,
			images: [
				{
					title: "barak",
					preview_source: "images/building/preview/2015_02_15-17_25.jpg",
					full_source: "images/building/full/2015_02_15-17_25.jpg"
				}
			]
		});

	var gallery_duben2015 = new Gallery(
		"#photos", 
		{
			title: "Duben 2015",
			expanded: false,
			images: [
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-19-15_57.jpg",
					full_source: "images/building/full/2015_04-19-15_57.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-19-15_58.jpg",
					full_source: "images/building/full/2015_04-19-15_58.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-19-15_59.jpg",
					full_source: "images/building/full/2015_04-19-15_59.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-19-16_00.jpg",
					full_source: "images/building/full/2015_04-19-16_00.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-26-15_04-2.jpg",
					full_source: "images/building/full/2015_04-26-15_04-2.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-26-15_04.jpg",
					full_source: "images/building/full/2015_04-26-15_04.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04-26-15_07.jpg",
					full_source: "images/building/full/2015_04-26-15_07.jpg"
				},
				{
					title: "barak",
					preview_source: "images/building/preview/2015_04_19-15_54.jpg",
					full_source: "images/building/full/2015_04_19-15_54.jpg"
				}
			]
		});
}

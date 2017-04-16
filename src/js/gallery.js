var Gallery = function(selector, config) {
	this.container = document.createElement("section");
	this.container.classList.add("gallery");

	this.status = config.expanded ? "expanded" : "collapsed";

	var control = this.createControl(config.title);
	this.container.appendChild(control);

	var connectionPoint = document.querySelector(selector);
	connectionPoint.appendChild(this.container);

	const preview = document.createElement("section");
	preview.classList.add("preview");

	config.images.forEach(image => {
		const figure = this.newImagePreview(image.title, image.preview_source, image.full_source);
		preview.appendChild(figure);
	});

	this.container.appendChild(preview);
}

Gallery.prototype.createControl = function(titleText) {
	var control = document.createElement("div");
	control.classList.add("control");

	var title = document.createElement("p");
	title.innerHTML = titleText;

	const controlImage = document.createElement("img");
	controlImage.src = "images/control-image.png";
	controlImage.addEventListener("click", e => this.onToggle());
	controlImage.innerHTML = titleText;

	control.appendChild(title);
	control.appendChild(controlImage);

	return control;
}

Gallery.prototype.newImagePreview = function(title, preview, full) {
	const figure = document.createElement("figure");

	const img = document.createElement("img");
	img.src = preview;
	img.setAttribute("width", "250px");

	const caption = document.createElement("figcaption");
	caption.innerHTML = title;

	figure.appendChild(img);
	figure.appendChild(caption);

	return figure;
}

Gallery.prototype.onToggle = function() {
	if (this.status === "expanded") {
		this.status = "collapsed";
		this.container.classList.remove("expanded");
		this.container.classList.add("collapsed");
	} else {
		this.status = "expanded";
		this.container.classList.remove("collapsed");
		this.container.classList.add("expanded");
	}
}
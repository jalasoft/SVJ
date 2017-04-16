var Gallery = function(connectionPoint, config) {
	this.container = document.createElement("section");
	this.container.classList.add("gallery");

	const control = document.createElement("div");
	control.classList.add("control");

	this.container.appendChild(control);

	const title = document.createElement("p");
	title.innerHTML = config.title;

	const controlImage = document.createElement("img");
	controlImage.src = "images/icon-chevron-down.png";
	controlImage.addEventListener("click", e => this.onToggle());
	//controlImage.classList.add("expanded");

	control.appendChild(title);
	control.appendChild(controlImage);

	connectionPoint.appendChild(this.container);

	const preview = document.createElement("div");
	preview.classList.add("preview");

	this.status = "expanded";


	config.images.forEach(image => {
		const figure = this.newImagePreview(image.title, image.preview_source, image.full_source);
		preview.appendChild(figure);
	});

	this.container.appendChild(preview);
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
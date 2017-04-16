var Navigation = function(containerSelector) {
	
	this.selector = containerSelector;
	this.articles = Object.create({});

	var links = document.querySelectorAll(containerSelector + " ul>li>a");
	links.forEach(link => {
		var href = link.getAttribute("href");
		this.articles[href] = document.querySelector(href);
		link.addEventListener("click", e => {
			this.toggleArticle(e.target);
		});
	});

	links.forEach(link => this.hideArticle(link));

	var link = this.initialTab();

	this.showArticle(link);
	this.displayed = link;
}

Navigation.prototype.initialTab = function() {
	var f = window.location.href;
	var selector;
	var index = f.lastIndexOf("#");
	if (index < 0) {
		selector = "a[href=#photos]";
	} else {
		selector = "a[href='" + f.slice(index) + "']";
	}

	return document.querySelector(selector);
}

Navigation.prototype.toggleArticle = function(link) {
	if (this.displayed) {
		this.hideArticle(this.displayed);
	}
	this.showArticle(link);
	this.displayed = link;
}

Navigation.prototype.hideArticle = function(link) {
	var article = this.article(link);

	article.style.display = "none";
	article.classList.remove("selected");
	link.classList.remove("selected");
}

Navigation.prototype.showArticle = function(link) {
	var article = this.article(link);

	article.style.display = "block";
	article.classList.add("selected");
	link.classList.add("selected");
}

Navigation.prototype.article = function(link) {
	return this.articles[link.getAttribute("href")];
}
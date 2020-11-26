for(var jum=0;jum<document.getElementsByClassName("fd-carousel").length;jum++) {
	carousels(0, jum);
}

function carousels(i, jum) {
	var carousel = document.getElementsByClassName("fd-carousel")[jum];
	var img = document.createElement("img");
	
	var width = carousel.getAttribute("width-carousel");
	var times = carousel.getAttribute("times-carousel");
	var src = carousel.getAttribute("src-carousel").split(";");

	if(carousel.hasChildNodes()) {
		carousel.removeChild(carousel.childNodes[0]);
	}
	img.setAttribute("src", src[i]);
	img.setAttribute("max-width", "100%");
	img.setAttribute("width", width);
	img.setAttribute("height", "auto");
	carousel.appendChild(img);
	setTimeout(function(){
		i = (i<src.length-1) ? i+1 : 0;
		carousels(i, jum);
	}, 2000);
}
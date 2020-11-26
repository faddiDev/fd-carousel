for(var jum=0;jum<document.getElementsByClassName("fd-carousel").length;jum++) {
	var carousel = document.getElementsByClassName("fd-carousel")[jum];
	var img = document.createElement("img");
	
	var width = carousel.getAttribute("width-carousel");
	var times = carousel.getAttribute("times-carousel");
	var src = carousel.getAttribute("src-carousel").split(";");
	
	function carousels(i) {
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
			carousels(i);
		}, 2000);
	}
	carousels(0);
}
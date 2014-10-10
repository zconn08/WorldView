$(document).ready(function(){
	getPhotos();
});

var getPhotos = function(){
	var result = $.ajax({
		url: "",
		dataType: "jsonP",
		cache: false,
		type: "GET"
	});
};
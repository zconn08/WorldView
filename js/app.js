//location IDs
// var eiffelTowerID = "54115074";
// var colosseumID = "2999873";
// var greatWallID = "236834088";
// var goldenGateID = "124854589";
// var peterhofID = "286588929";

var locationIds = {
	"eiffelButton" : "54115074",
	"colosseumButton" : "2999873",
	"greatWallButton" : "236834088",
	"goldenGateButton" : "124854589",
	"peterhofButton" : "286588929"
};

$(document).ready(function(){
	//Initialize by retreiving photos of current ID
	getPhotos(locationIds["colosseumButton"]);
	$(".locationButton").click(function(e){
		$(".locationButton").css("color","#FEFCE8");
		$(this).css("color","#3D2117");
		var id = e.currentTarget.id;
		getPhotos(locationIds[id]);
	});
	//When a location button is clicked, change the currentID to that location
	// $("#colosseumButton").click(function(){
	// 	currentID = colosseumID;
	// });
	// $("#eiffelButton").click(function(e){
	// 	debugger;
	// 	currentID = eiffelTowerID;
	// });
	// $("#greatWallButton").click(function(){
	// 	currentID = greatWallID;
	// });
	// $("#goldenGateButton").click(function(){
	// 	currentID = goldenGateID;
	// });
	// $("#peterhofButton").click(function(){
	// 	currentID = peterhofID;
	// });
	// //When a location button is clicked, empty images and get new photos
	// $(".locationButton").click(function(){
	// 	$(".locationButton").css("color","#FEFCE8");
	// 	$(this).css("color","#3D2117");
	// 	getPhotos();
	// });
});
//
// switchCurrentId = function(){
//
// };

//get photos from instagram for current ID
getPhotos = function(currentID){
	var result = $.ajax({
		url: "https://api.instagram.com/v1/locations/" + currentID + "/media/recent?access_token=558008261.49e491a.e7b4df19d28140d981f58197de9a3851",
		dataType: "jsonp",
		cache: false,
		type: "GET",
		success: function(result){
			for (var i = 0; i < 3; i++){
				postData = result.data[i];
				$("#img"+i).attr("src",postData.images.low_resolution.url);

				$("#link"+i).attr("href",postData.link);

				var tagString = "";
				for (var j = 0; (j < 3 && j < postData.tags.length); j++) {
					tagString += ("#" + postData.tags[j] + " ");
				}
				$("#tags"+i).html(tagString);
		}
	}});
};

//location IDs
var eiffelTowerID = "54115074";
var colosseumID = "2999873";
var greatWallID = "236834088";
var goldenGateID = "124854589";
var peterhofID = "286588929";

//Start with Colosseum as current ID
var currentID = colosseumID;

$(document).ready(function(){
	//Initialize by retreiving photos of current ID 
	getPhotos();

	//When a location button is clicked, change the currentID to that location
	$("#colosseumButton").click(function(){
		currentID = colosseumID;
	});
	$("#eiffelButton").click(function(){
		currentID = eiffelTowerID;
	});
	$("#greatWallButton").click(function(){
		currentID = greatWallID;
	});
	$("#goldenGateButton").click(function(){
		currentID = goldenGateID;
	});
	$("#peterhofButton").click(function(){
		currentID = peterhofID;
	});
	//When a location button is clicked, empty images and get new photos
	$(".locationButton").click(function(){
		$(".locationButton").css("color","white");
		$(this).css("color","black");
		emptyImages();
		getPhotos();
	});
});

//empty images in the three windows
var	emptyImages = function(){
	for (var i = 0; i < 3; i++){
			$("#img"+i).attr("src","");
		}
};

//get photos from instagram for current ID
var getPhotos = function(){
	var result = $.ajax({
		url: "https://api.instagram.com/v1/locations/" + currentID + "/media/recent?access_token=558008261.49e491a.e7b4df19d28140d981f58197de9a3851",
		dataType: "jsonp",
		cache: false,
		type: "GET"
	})
	.done(function(result){
		console.log("success");
		for (var i = 0; i < 3; i++){
			console.log(result);
			console.log(result.data[i].images.low_resolution.url);
			$("#img"+i).attr("src",result.data[i].images.low_resolution.url);
		}
	});
};
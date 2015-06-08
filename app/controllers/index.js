/*
function doClick(e) {  
    
    alert("Hi Tai!");
}

function buttonClick(e) {
	
	alert("United on Top");
}

function outputState(e) {
	
	alert('Switch Value: ' + e.value);
}


function tableCheck(e) {
	
	// either by doing this with a SWITCH structure
	switch(e.index) {
		case 0: 
			alert("You clicked Apple");
			break;
		case 1:
			alert("You clicked Bananas");
			break;
		case 2:
			alert("You clicked Carrots");
			break;
		case 3:
			alert("You clicked Potatoes");
			break;
	}
	
	*/
	/*
	
	// or via a IF else if structure
	if(e.index == 0) {
		alert("You clicked on Apple");
	} else if(e.index == 1){
		alert("You clicked Bananas");
	} else if(e.index == 2) {
		alert("You clicked Carrots");
	} else if(e.index == 3) {
		alert("You clicked Potatoes");
	}
	
}
*/
/*
function playAudio(e) {
var player = Ti.Media.createSound({
	
	url:'audio/start_race.mp3'
	
});
player.play();
}
*/

// e.direction for detecting swipe direction
function swipeEvent(e) {
	
	if(e.direction == 'left') {
		alert("You swiped left");
	} else if (e.direction =="right") {
		alert("You swiped right");
	} else if (e.direction == "up") {
		alert("You swiped up");
	} else if (e.direction == "down") {
		alert("You swiped down");
	}
	
}

//two Fingertap event
function twoFingers(e) {
	alert('Two Fingertap done');
}
//SHAKE gesture
Titanium.Gesture.addEventListener('shake', function(e){
	alert('Shake it');
});


// gesture ORIENTATION change
Titanium.Gesture.addEventListener('orientationchange', function(e) {
	
	if(e.orientation == 1){
		alert("PORTRAIT mode");
	} else if (e.orientation == 2) {
		alert(" UPSIDE_PORTRAIT mode");
	} else if (e.orientation == 3) {
		alert("LANDSCAPE_LEFT mode");
	} else if (e.orientation == 4) {
		alert("LANDSCAPE_RIGHT mode");
	}
});

// function for index.xml that opens window2
function showWin1(e) {
	var w = Alloy.createController('win2').getView();
	w.open();
};
$.index.open();

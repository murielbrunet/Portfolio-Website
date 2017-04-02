var currentImage;
var captionText;
var captions = {
	"img01" : "Final Project: Game using hierachical modeling,<br>texture mapping, blender objects, lighting and camera movement.<br><i>Computer Graphics - Fall 2016</i>",
	"img02" : "Webpages designed and developed for an exhibit on boater hats in collaboration with the Historic Costume Collection.<br><i>Human Computation and Visualization Laboratory at Smith College<br>Fall 2016</i>",
	"img03" : "Understanding and experimenting with Bezier curves<br><i>Computer Graphics - Fall 2016</i>",
	"img04" : "Modeling queen chess piece in blender with UV texture mapping<br><i>Computer Graphics - Fall 2016</i>",
	"img05" : "Web design project: Japan Travel with seasonal themes<br><i>Interactive Web Documents - Spring 2015</i>"

};

var images = {
	"img01" : "images/programming/final project.gif",
	"img02" : "images/programming/boater project.png",
	"img03" : "images/programming/bezier line curves.gif",
	"img04" : "images/programming/wooden queen.png",
	"img05" : "images/programming/japan travel website.png"
};


function openModal(imgID){
	currentImage = imgID; //define the current image as the one that was clicked to open modal window

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal 
	var img = document.getElementById(imgID);
	captionText = document.getElementById("caption");

	var modalImg = document.getElementById("modalContent");
	//img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = images[imgID];
	    captionText.innerHTML = captions[imgID];
	//}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
}

function previous(){
	var images = ["img01", "img02", "img03", "img04", "img05"];
	var index = images.indexOf(currentImage);
	if(index - 1 < 0){
		index = images.length - 1;
	} else {
		index -= 1;
	}

	update(images[index]);
}

function next(){
	var images = ["img01", "img02", "img03", "img04", "img05"];
	var index = images.indexOf(currentImage);
	if(index + 1 >= images.length){
		index = 0;
	} else {
		index += 1;
	}

	update(images[index]);
}

function update(imgID){
	// Get the modal
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("modalContent");
	
    modal.style.display = "block";
	modalImg.src = images[imgID];
    captionText.innerHTML = captions[imgID];


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";

	}

	currentImage = imgID; // redefine current image

}




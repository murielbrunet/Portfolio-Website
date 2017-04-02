var currentImage;
var captionText;
var captions = {
	"img01" : "Submitted design for Computer Science Department at Smith College<br><i>Fall 2016</i>",
	"img02" : "Winning design for dorm apparel at Smith College - pocket square followed by back design<br><i>Fall 2016</i>",
	"img03" : "Draft followed by winning design for Smith College's first hackathon<br><i>Fall 2014</i>",
};

var images = {
	"img01" : "images/design/Final CS Design.jpg",
	"img02" : "images/design/morris house.png",
	"img03" : "images/design/logos.png"
};


function openModal(imgID){
	currentImage = imgID; //define the current image as the one that was clicked to open modal window

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal 
	img = document.getElementById(imgID);
	captionText = document.getElementById("caption");

	var modalImg = document.getElementById("modalContent");
//	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = images[imgID];
	    captionText.innerHTML = captions[imgID];
//	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
}

function previous(){
	var images = ["img01", "img02", "img03"];
	var index = images.indexOf(currentImage);
	if(index - 1 < 0){
		index = images.length - 1;
	} else {
		index -= 1;
	}

	update(images[index]);
}

function next(){
	var images = ["img01", "img02", "img03"];
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




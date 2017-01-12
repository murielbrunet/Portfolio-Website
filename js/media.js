var currentImage;
var captionText;
var captions = {
	"img01" : "Poster design for an imagenary event on campus<br><i>Visual Storytelling - Fall 2016</i>",
	"img02" : "Installation representing our own experiences at Smith College<br><i>Visual Storytelling - Fall 2016</i>",
	"img03" : "Mushrooms from the Smith College MacLeish Field Station<br><i>Visual Storytelling - Fall 2016</i>",
	"img04" : "<br><i>Summer 2014</i>",
	"img05" : "Flowers from the Smith College Botanical Gardens<br><i>Fall 2014</i>"
};

var images = {
	"img01" : "images/multi media/CC S'mores Night Final.png",
	"img02" : "images/multi media/Installation 1.JPG",
	"img03" : "images/multi media/Mushroom Book.gif",
	"img04" : "images/multi media/Imaginary House.jpg",
	"img05" : "images/multi media/Botanical Garden Flowers.jpg"	
};




function openModal(imgID){
	currentImage = imgID; //define the current image as the one that was clicked to open modal window

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal 
	var currentImg = document.getElementById(imgID);
	captionText = document.getElementById("caption");

	var modalImg = document.getElementById("modalContent");
	currentImg.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = images[imgID]; //replace thumbnail with large size img
	    captionText.innerHTML = captions[imgID];
	}

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

	// var currentImg = document.getElementById(imgID);
	var modalImg = document.getElementById("modalContent");
	
    modal.style.display = "block";
	modalImg.src = images[imgID]; //replace thumbnail with large size img
	captionText.innerHTML = captions[imgID];

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";

	}

	currentImage = imgID; // redefine current image

}




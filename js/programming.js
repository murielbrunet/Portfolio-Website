var currentImage;
var captionText;
var captions = {
	"img01" : "Glass chess pieces made in Blender<br><i>Computer Graphics - Fall 2016</i>",
	"img02" : "Interactive solar system with point lights and hierarchical modeling<br><i>Computer Graphics - Fall 2016</i>",
	"img03" : "Creating 3D scenes using THREE js<br><i>Computer Graphics - Fall 2016</i>",
	"img04" : "Exploring paint fill algorithms<br><i>Computer Graphics - Fall 2016</i>",
	"img05" : "Modeling queen chess piece in blender with UV texture mapping<br><i>Computer Graphics - Fall 2016</i>",
	"img06" : "Understanding and experimenting with Bezier curves<br><i>Computer Graphics - Fall 2016</i>"
};




function openModal(imgID){
	currentImage = imgID; //define the current image as the one that was clicked to open modal window

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal 
	var img = document.getElementById(imgID);
	captionText = document.getElementById("caption");

	var modalImg = document.getElementById("modalContent");
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
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
	var images = ["img01", "img02", "img03", "img04", "img05", "img06"];
	var index = images.indexOf(currentImage);
	if(index - 1 < 0){
		index = images.length - 1;
	} else {
		index -= 1;
	}

	update(images[index]);
}

function next(){
	var images = ["img01", "img02", "img03", "img04", "img05", "img06"];
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

	var img = document.getElementById(imgID);
	// var img = new Image();
	// img.src = "../images/aboutImage.jpg";
	var modalImg = document.getElementById("modalContent");
	
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = captions[imgID];


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";

	}

	currentImage = imgID; // redefine current image

}




var currentImage;
var captionText;
var captions = {
	"img01" : "Submitted design for Computer Science Department at Smith College<br><i>Fall 2016</i>",
	"img02" : "Winning design for dorm apparel at Smith College - back<br><i>Fall 2016</i>",
	"img03" : "Winning design for dorm apparel at Smith College - pocket square<br><i>Fall 2016</i>",
	"img04" : "Winning design for Smith College's first hackathon<br><i>Fall 2014</i>",
	"img05" : "Draft design Smith College's first hackathon<br><i>Fall 2014</i>",
};

var images = {
	"img01" : "images/design/Final CS Design.jpg",
	"img02" : "images/design/Final Morris Design.jpg",
	"img03" : "images/design/Final Morris Pocket Square.jpg",
	"img04" : "images/design/Hackathon Logo 2.png",
	"img05" : "images/design/Hackathon Logo 1.png",
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
	    // captionText.innerHTML = this.alt;
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

	var img = document.getElementById(imgID);
	var modalImg = document.getElementById("modalContent");
	
    modal.style.display = "block";
    modalImg.src = img.src;
	// captionText.innerHTML = this.alt;
	captionText.innerHTML = captions[imgID];

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";

	}

	currentImage = imgID; // redefine current image

}




// Get the modal
var modal = document.getElementById('resumeModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var resumeLink = document.getElementById("resumeLink");
var modalImg = document.getElementById("img01");

resumeLink.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "../images/resume.jpg";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// // Get the modal
// var modal = document.getElementById('resumeModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('resume');
// var modalImg = document.getElementById("img01");

// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
//navigation bar jquery start
$(function(){
    $("#nav-placeholder").load("nav.html");
  });
//navbar function end


//image slider 

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}


/*
// Automatic sliding (optional)
setInterval(function() {
  changeSlide(1);
}, 10000); // Change image every 5 seconds
*/
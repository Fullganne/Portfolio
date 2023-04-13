window.onscroll = function() {hide_goup()};
function hide_goup(){
    if(document.documentElement.scrollTop < 200){
        document.getElementById('myBtn').className = "hide_goup";
    }
    else{
        document.getElementById('myBtn').className = "scroll-up";
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  
}
// var responsiveSlider = function() {
//   var slider = document.getElementsByClassName("container-slideshow");
//   var sliderWidth = slider.offsetWidth;
//   var slideList = document.getElementsByClassName("mySlides");
//   var count = 1;
//   var items = slideList.querySelectorAll("img").length;
//   var prev = document.getElementsByClassName("prev");
//   var next = document.getElementsByClassName("next");
//   window.addEventListener('resize', function() {
//     sliderWidth = slider.offsetWidth;
//   });
//   var nextSlide = function() {
//     if(count < items) {
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//     else if(count = items) {
//       slideList.style.left = "0px";
//       count = 1;
//     }
//   };
//   var prevSlide = function() {
//     if(count > 1) {
//       count = count - 2;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//     else if(count = 1) {
//       count = items - 1;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//   };
//   next.addEventListener("click", function() {
//     nextSlide();
//   });
//   prev.addEventListener("click", function() {
//     prevSlide();
//   });
//   setInterval(function() {
//     nextSlide()
//   }, 8000);
// };
// window.onload = function() {
//   responsiveSlider();
// }

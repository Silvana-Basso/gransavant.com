var galleryContainer = document.querySelector(".galeriaGrid");
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");
var slideIndex = 0;

var images = galleryContainer.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
  images[i].dataset.index = i;
  images[i].addEventListener("click", function () {
    var index = parseInt(this.dataset.index);
    openModal();
    currentSlide(index + 1);
  });
}

for (var i = 0; i < images.length; i++) {
  var slide = document.createElement("div");
  slide.className = "mySlides";
  var img = document.createElement("img");
  img.src = images[i].src;
  img.style.width = "100%";
  slide.appendChild(img);
  modalContent.appendChild(slide);
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

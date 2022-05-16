var slideIndex = 1,
    interval;

function stopAndStart() {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(showSlides, 10000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    stopAndStart()
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    stopAndStart()
}

function showSlides(n) {
    var i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");

    if (n === undefined) {
        n = ++slideIndex;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

stopAndStart();

//Sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgb(254, 250, 224,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "#fefae0";
}
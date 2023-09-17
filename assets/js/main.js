window.addEventListener("scroll", animate);
window.addEventListener("load", animate);

function animate() {
  var animates = document.querySelectorAll(".animate");

  for (var i = 0; i < animates.length; i++) {
    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    var animatetop = animates[i].getBoundingClientRect().top;

    var animatePoint = 10;
    if (animatetop < windowHeight - animatePoint) {
      animates[i].classList.add("active_on");
    } else {
      animates[i].classList.remove("active_on");
    }
  }
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

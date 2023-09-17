function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);

    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }

    // Apply Transition
    if (scroll >= 250) {
      navBar.classList.add("navbar-sticky-transitioned");
      scrollTopButton.classList.add("scrollActive");
    } else {
      navBar.classList.remove("navbar-sticky-transitioned");
      scrollTopButton.classList.remove("scrollActive");
    }

    //sticky on
    if (scroll >= 500) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}
navMenu();

window.addEventListener("scroll", animate);
window.addEventListener("load", animate);

function animate() {
  var animates = document.querySelectorAll(".animate");

  for (var i = 0; i < animates.length; i++) {
    var windowHeight = window.innerHeight;
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

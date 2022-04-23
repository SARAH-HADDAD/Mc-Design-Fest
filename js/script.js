$(document).ready(function () {
  $(".owl-carousel").owlCarousel({ items: 4, nav: true });
});
const navbar = {
  button: "",
  nav: document.querySelector(".main-nav"),
};

function scrollHandler(e) {
  if (window.pageYOffset > 300) navbar.nav.classList.add("fixed");
  else navbar.nav.classList.remove("fixed");
}
document.onscroll = scrollHandler;
scrollHandler();

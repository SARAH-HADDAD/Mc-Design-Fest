$(document).ready(function () {
  $(".owl-carousel").owlCarousel({ items: 4, nav: true });
});
const navbar = {
  button: "",
  nav: document.querySelector(".main-nav"),
};
const schedule = {
  buttons: document.querySelectorAll(".schedule-nav a"),
  days: document.querySelectorAll(".schedule-day"),
};

function scrollHandler(e) {
  if (window.pageYOffset > 300) navbar.nav.classList.add("fixed");
  else navbar.nav.classList.remove("fixed");
}
document.onscroll = scrollHandler;
scrollHandler();

function hideDays() {
  schedule.days.forEach((elem) => {
    elem.classList.remove("active");
  });
  schedule.buttons.forEach((elem) => {
    elem.classList.remove("active");
  });
}

schedule.buttons.forEach(function (elem, i) {
  elem.onclick = function () {
    hideDays();
    elem.classList.add("active");
    schedule.days[i].classList.add("active");
  };
});

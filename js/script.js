var navMain = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".main-nav__toggle"),
    header = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");
header.classList.add("page-header--fixed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    header.classList.remove("page-header--fixed");
  } else {
    navMain.classList.add("main-nav--closed");
    header.classList.add("page-header--fixed");
  }
});

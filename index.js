var body = document.querySelector("body");
var toggle = document.querySelector(".toggle");
var mainHome = document.querySelector(".main-home");
var sideBar = document.querySelector(".sidebar");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  mainHome.classList.toggle("dark");
  sideBar.classList.toggle("dark");
  body.classList.toggle("dark");

});

import navbar from "../components/navbar.js";

let navbar_div = document.getElementById("top_navbar");
navbar_div.innerHTML = navbar();


let slidesContainerA = document.getElementById("slides-containerA");
let slideA = document.querySelector(".slideA");
let prevButtonA = document.getElementById("slide-arrow-prevA");
let nextButtonA = document.getElementById("slide-arrow-nextA");

nextButtonA.addEventListener("click", () => {
  let slideWidth = slideA.clientWidth;
  slidesContainerA.scrollLeft += slideWidth;
});

prevButtonA.addEventListener("click", () => {
  let slideWidth = slideA.clientWidth;
  slidesContainerA.scrollLeft -= slideWidth;
});


let signinUser = JSON.parse(localStorage.getItem("HP_user"));
let signinName = document.getElementById("AKsignin");
signinName.innerText = signinUser.name || "Sign In";

let user_div = document.querySelector("#top_navbar_second_user > div");
user_div.innerText = signinUser.name[0];
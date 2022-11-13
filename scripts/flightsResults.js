import navbar from "../components/navbar.js";

let navbar_div = document.getElementById("top_navbar");
navbar_div.innerHTML = navbar();

let signinUser = JSON.parse(localStorage.getItem("HP_user"));
let signinName = document.getElementById("AKsignin");
signinName.innerText = signinUser.name || "Sign In";


let user_div = document.querySelector("#top_navbar_second_user > div");
user_div.innerText = signinUser.name[0];
let getproduct = JSON.parse(localStorage.getItem("hotel"));

let userData = JSON.parse(localStorage.getItem("HP_user"));

let searchData = JSON.parse(localStorage.getItem("query"));
console.log(searchData);

let lastprice = JSON.parse(localStorage.getItem("price"));

let checkin = document.getElementById("d-chin");
checkin.innerText = `Sun  ${searchData.chekin}`;

let checkout = document.getElementById("d-chout");
checkout.innerText = `Mon  ${searchData.chekout}`;

let username = document.querySelector("#Dprofile>h3");
username.innerText = userData.name;

let pr_dp = document.querySelector("#Dprofile>div>h3");
pr_dp.innerText = userData.name[0];

let name = (document.getElementById("dr-n").innerText = userData.name);

let email = (document.getElementById("dr-e").innerText = userData.email);

let price = document.getElementById("dr-pr");
price.innerText = 0;

let shpr = document.getElementById("dr-sch-pay");
shpr.innerText = 0;

let shpr1 = document.getElementById("dr-sch-pay1");
shpr1.innerText = 0;

let appendProduct = (data) => {
  let cont = document.getElementById("Dream-show-product");
  cont.innerHTML = null;
  let div1 = document.createElement("div");
  div1.id = "Dream-div1";
  let div2 = document.createElement("div");
  div2.id = "Dream-div2";
  let div = document.createElement("div");
  let name = document.createElement("h2");
  let image = document.createElement("img");
  let addrs = document.createElement("p");
  let rat = document.createElement("h4");
  rat.id = "Dream-rat";
  let review_btn = document.createElement("button");
  review_btn.id = "Dream-review-btn";
  let rp = document.createElement("p");
  rp.id = "Dream-rp";

  name.innerText = data.name;
  image.src = data.image;
  addrs.innerText = data.city;
  price.innerText = +lastprice;
  shpr.innerText = +lastprice;
  shpr1.innerText = +lastprice;

  let ans = "";
  for (let i = 0; i < Math.ceil(data.rating); i++) {
    ans += "⭐";
  }
  rat.innerText = `Hotel ${ans}`;
  let ansr = "";
  if (Math.ceil(data.review) <= 10 && Math.ceil(data.review) > 8) {
    ansr += "Very Good .50 reviews";
  } else if (Math.ceil(data.review) <= 8 && Math.ceil(data.review) > 5) {
    ansr += "Good .35 reviews";
  } else if (Math.ceil(data.review) <= 5 && Math.ceil(data.review) > 1) {
    ansr += "Average .30 reviews";
  }

  rp.innerText = ansr;
  review_btn.innerText = data.review;
  div1.append(image);
  div.append(review_btn, rp);
  div2.append(rat, name, addrs, div);

  cont.append(div1, div2);
};
appendProduct(getproduct);

function gotoFinalPage() {
  window.location.href = "finalDetails.html";
  console.log("finally");
}

///---------------------------countrycode-----------------------------------------------

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "in",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
function getIp(callback) {
  fetch("https://ipinfo.io/json?token=<your token>", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: "in",
      };
    })
    .then((resp) => callback(resp.country));
}

// ----------------------------------------------------aplly promocode--------------------------------------------------

function applyCode() {
  let promo = document.getElementById("dr-promo").value;

  if (promo === "bookit#250") {
    let discount = lastprice * (10 / 100);
    let final_amount = lastprice - discount;
    let fp = (document.getElementById("dr-pr").innerText = +final_amount);
    let sh = (document.getElementById("dr-sch-pay").innerText = +final_amount);
    let sh1 = (document.getElementById("dr-sch-pay1").innerText =
      +final_amount);
    let tam = document.querySelector(".promo-pop-up1>h2");
    tam.innerText = `You have saved: ₹  ${discount}`;
    let pam = document.querySelector(".promo-pop-up1>h3");
    pam.innerText = `Now you will have to pay: ₹ ${final_amount}`;
    let sam = document.querySelector(".promo-pop-up1>h4");
    sam.innerText = `Total amount was: ₹ ${lastprice}`;
    console.log(tam, pam, sam);
    document.querySelector(".promo-pop-up").style.display = "block";
    document.querySelector(".promo-pop-up1").style.display = "block";
    document.getElementById("d-label").style.color = "black";
    let pm = document.getElementById("dr-promo");
    pm.style.borderColor = "grey";
  } else {
    document.getElementById("d-label").style.color = "red";
    let pm = document.getElementById("dr-promo");
    pm.style.borderColor = "red";
    alert("Soryy! Wrong Promo Code");
  }
  document.getElementById("dr-promo").value = null;
}

function closePopPromo() {
  document.querySelector(".promo-pop-up").style.display = "none";
  document.querySelector(".promo-pop-up1").style.display = "none";
  
}

function bookingSucc() {
  document.querySelector(".promo-pop-up2").style.display = "block";
  document.querySelector(".promo-pop-up3").style.display = "block";
}

function closebookingPop() {
  document.querySelector(".promo-pop-up2").style.display = "none";
  document.querySelector(".promo-pop-up3").style.display = "none";
  window.location.href = "./index.html";
}

function gotoHomePage() {
  window.location.href = "./index.html";
}

function disabledInputs(){
  let value=document.getElementById("dr-card-payment").value;
  if(value==="By Cash"){
   document.getElementById("dr-ch-name").disabled=true;
   document.getElementById("dr-cnumber").disabled=true;
   document.getElementById("dr-cr-month").disabled=true;
   document.getElementById("dr-cr-year").disabled=true;
  }else{
    document.getElementById("dr-ch-name").disabled=false;
   document.getElementById("dr-cnumber").disabled=false;
   document.getElementById("dr-cr-month").disabled=false;
   document.getElementById("dr-cr-year").disabled=false;
  }
}

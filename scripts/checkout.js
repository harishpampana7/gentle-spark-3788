let getproduct = JSON.parse(localStorage.getItem("hotel"));

let userData=JSON.parse(localStorage.getItem("HP_user"));

// let username=document.querySelector("#Dprofile>h3");
// username.innerText=userData.name;

// let username1=document.querySelector("#d-div1>div>p");
// username1.innerText=userData.name;

let random = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let price=document.getElementById("dr-pr");
price.innerText=0;

let shpr=document.getElementById("dr-sch-pay")
shpr.innerText=0;

let shpr1=document.getElementById("dr-sch-pay1");
shpr1.innerText=0;

let appendProduct = (data) => {
  let cont = document.getElementById("Dream-show-product");
  cont.innerHTML = null;
  let div1 = document.createElement("div");
  div1.id = "Dream-div1";
  let div2 = document.createElement("div");
  div2.id = "Dream-div2";
  let Av_div = document.createElement("div");
  Av_div.id = "Dream-av-div";
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
  let av_btn = document.createElement("button");
  av_btn.id = "Dream-av-btn";
  let n_div = document.createElement("div");
  n_div.id = "Dream-n-div";
  let room_num = document.createElement("h4");
  let minus = document.createElement("button");
  minus.id = "Dream-minus";
  minus.disabled = true;
  let plus = document.createElement("button");
  plus.id = "Dream-plus";
  let c1 = 0;
  room_num.innerText = c1;
  plus.addEventListener("click", () => {
    minus.disabled = false;

    c1++;
    room_num.innerText = c1;
  let final_price= data.price *(c1);
  price.innerText=`₹ ${final_price}`;
  shpr.innerText=`₹ ${final_price}`;
  shpr1.innerText=`₹ ${final_price}`;
 //console.log(data.price*c1);
    if (c1 === random) {
      plus.disabled = true;
      minus.disabled = false;
    }
  });
  minus.addEventListener("click", () => {
    c1--;
    room_num.innerText = c1;
    let final_price= data.price *(c1);
    price.innerText=`₹ ${final_price}`;
    shpr.innerText=`₹ ${final_price}`;
    shpr1.innerText=`₹ ${final_price}`;
     //console.log(data.price*c1);
    if (c1 === 0) {
      minus.disabled = true;
      plus.disabled = false;
    }
  });

  name.innerText = data.hn;
  image.src = data.img;
  addrs.innerText = data.add;
  
  let ans = "";
  for (let i = 0; i < Math.ceil(data.rating); i++) {
    ans += "⭐";
  }
  rat.innerText = `Hotel ${ans}`;
  let ansr = "";
  for (let j = 0; j < Math.floor(data.review); j++) {
    if (j <= 10) {
      ansr += "Best .50 reviews";
      break;
    } else if (j <= 8) {
      ansr += "Very Good .35 reviews";
      break;
    } else if (j <= 5) {
      ansr += "Good .30 reviews";
      break;
    }
  }

  rp.innerText = ansr;
  review_btn.innerText = data.review;
  av_btn.innerText = `Available rooms : ${random}`;

  plus.innerText = "+";
  minus.innerText = "-";
  n_div.append(minus, room_num, plus);
  Av_div.append(av_btn, n_div);
  div1.append(image);
  div.append(review_btn, rp);
  div2.append(rat, name, addrs, div, Av_div);

  cont.append(div1, div2);
};
appendProduct(getproduct);

function gotoFinalPage(){
    window.location.href="finalDetails.html";
    console.log("finally");
}

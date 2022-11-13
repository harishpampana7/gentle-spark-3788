let getproduct = JSON.parse(localStorage.getItem("hotel"));

let userData=JSON.parse(localStorage.getItem("HP_user"));

let searchData = JSON.parse(localStorage.getItem("query"));
console.log(searchData);

let checkin=document.getElementById("d-chin");
checkin.innerText=`Sun  ${searchData.chekin}`;

let checkout=document.getElementById("d-chout");
checkout.innerText=`Mon  ${searchData.chekout}`;

 let username=document.querySelector("#Dprofile>h3");
 username.innerText=userData.name;

 let username1=document.querySelector("#d-div1>div>p");
 username1.innerText=userData.name;

 let pr_dp=document.querySelector("#Dprofile>div>h3");
 pr_dp.innerText=userData.name[0];

let random = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let price=document.getElementById("dr-pr");
price.innerText=0;

let shpr=document.getElementById("dr-sch-pay")
shpr.innerText=0;

let shpr1=document.getElementById("dr-sch-pay1");
shpr1.innerText=0;

let lastprice;

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
  lastprice=final_price;
  
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
    lastprice=final_price;
 
    if (c1 === 0) {
      minus.disabled = true;
      plus.disabled = false;
    }
  });

  name.innerText = data.name;
  image.src = data.image;
  addrs.innerText = data.city;
  
  let ans = "";
  for (let i = 0; i < Math.ceil(data.rating); i++) {
    ans += "⭐";
  }
  rat.innerText = `Hotel ${ans}`;
  let ansr = "";
    if (Math.ceil(data.review) <= 10 && Math.ceil(data.review)>8 ) {
      ansr += "Very Good .50 reviews";
      
    } else if (Math.ceil(data.review) <= 8 && Math.ceil(data.review)>5 ) {
      ansr += "Good .35 reviews";
    
    } else if (Math.ceil(data.review) <= 5 && Math.ceil(data.review)>1 ) {
      ansr += "Average .30 reviews";
      
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
    let fn=document.getElementById("d-fn").value;
    let ln=document.getElementById("d-ln").value;
    let eml=document.getElementById("d-eml").value;
    let cn_eml=document.getElementById("d-cn-eml").value;
   
    if(fn===""||ln===""||eml===""||cn_eml===""){
      let fn1=document.getElementById("d-fn").style.borderColor="red";
      let ln1=document.getElementById("d-ln").style.borderColor="red";
      let eml1=document.getElementById("d-eml").style.borderColor="red";
      let cn_eml1=document.getElementById("d-cn-eml").style.borderColor="red";
      alert("!!Please fill all the input fields");
    }else{
      
      localStorage.setItem("price",JSON.stringify(lastprice));
      window.location.href="./finalDetails.html";
      console.log("finally");
      let fn1=document.getElementById("d-fn").value=null;
      let ln1=document.getElementById("d-ln").value=null;
      let eml1=document.getElementById("d-eml").value=null;
      let cn_eml1=document.getElementById("d-cn-eml").value=null;
      
    }
   
}

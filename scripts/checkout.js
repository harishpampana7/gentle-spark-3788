let getproduct = JSON.parse(localStorage.getItem("hotel"));

let appendProduct=(data)=>{
let cont = document.getElementById("Dream-show-product");
cont.innerHTML=null;
let div1=document.createElement("div");
div1.id="Dream-div1"
let div2=document.createElement("div");
div2.id="Dream-div2"
let name=document.createElement("h2");
let image=document.createElement("img");
let addrs=document.createElement("p");
let pr=document.createElement("h3");
let rat=document.createElement("h4");
rat.id="Dream-rat";
let review_btn=document.createElement("button");
review_btn.id="Dream-review-btn";

name.innerText=data.hn;
image.src=data.img
addrs.innerText=data.add;
pr.innerText=data.price;
let ans="";
for(let i=0;i<Math.ceil(data.rating);i++){
ans+= "⭐";
}
rat.innerText=`Hotel ${ans}`;
review_btn.innerText=data.review;


div1.append(image);
div2.append(rat,name,addrs,review_btn)
cont.append(div1,div2);
}

appendProduct(getproduct);
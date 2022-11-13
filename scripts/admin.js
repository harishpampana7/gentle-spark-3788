import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

let header = document.getElementById("top_navbar");
header.innerHTML = navbar();

let api = `https://bookit-com-server.onrender.com/hotel`;
// let api = `http://localhost:3000/hotel`;

window.onload = () => {
  let addBtn = document.getElementById("submitBtn");
  addBtn.onclick = () => {
    addPlace(event);
  };
};

let addPlace = async (e) => {
  e.preventDefault();

  let form = document.getElementById("form-data");

  let image = form.image.value;
  let name = form.name.value;
  let type = form.type.value;
  let price = +form.price.value;
  let rating = +form.rating.value;
  let city = form.city.value;
  let review = +form.review.value;
  let strikeprice = +form.strikeprice.value;

  let data = {
    id: Date.now() + Math.random() * 100,
    name,
    image,
    price,
    type,
    rating,
    city,
    review,
    strikeprice,
  };
  console.log(data);

  await fetch(api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getdata();
  document.getElementById("form-data").reset();
};

let signinUser = JSON.parse(localStorage.getItem("HP_user"));
let signinName = document.getElementById("AKsignin");
signinName.innerText = "Admin";

let user_div = document.querySelector("#top_navbar_second_user > div");
user_div.innerText = "A";

// let api = `https://bookit-com-server.onrender.com/hotel`;
let c_num;
let getdata = async () => {
  let res = await fetch(api);
  res = await res.json();
  console.log(res);
  console.log(res.length);
  c_num = res.length;
  let count = document.getElementById("res_count_1");
  count.innerText = c_num;
  // renderDom(res);
};

getdata();

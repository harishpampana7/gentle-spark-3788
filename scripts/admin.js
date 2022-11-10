let api = `  http://localhost:3000/hotel`;

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
};

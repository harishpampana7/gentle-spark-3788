let addHotel = (e) => {
  e.preventDefault();
  let form = document.getElementById("add-hotel");
  let hn = form.name.value;
  let img = form.image.value;
  let add = form.add.value;
  let review = +form.review.value;
  let rating = +form.rating.value;
  let price = +form.price.value;
  let obj = { hn, img, add, review, rating, price };
  console.log(obj);
  localStorage.setItem("hotel", JSON.stringify(obj));
};

//

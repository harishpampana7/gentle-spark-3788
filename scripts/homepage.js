

//page linking 


document.getElementById("SkLink").addEventListener("click", ()=>{
  window.location.href = "admin.html"
})
document.getElementById("skRegister").addEventListener("click", ()=>{
  window.location.href = "signup.html"
})
document.getElementById("skSignIn").addEventListener("click", ()=>{
  window.location.href = "signin.html"
})
document.getElementById("SKflights").addEventListener("click",()=>{
  window.location.href = "flights.html"
})
document.getElementById("SKcarRental").addEventListener("click",()=>{
  window.location.href = "cars.html"
})
//slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000);    
}

document.getElementById("SKlogo").addEventListener("click",function(){
    window.location.href = "index.html"
})

//cities swiper;
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

//next swiper ;
let slideContainerB = document.getElementById("slides-containerB");
let slideB = document.querySelector(".slideB")
let prevBtnB = document.getElementById("slide-arrow-prevB");
let nextBtnA = document.getElementById("slide-arrow-nextB");

nextBtnA.addEventListener("click", ()=>{
  let slideWidth = slideB.clientWidth;
  slideContainerB.scrollLeft += slideWidth
  console.log("next")
})
prevBtnB.addEventListener("click", ()=>{
  let slideWidth = slideB.clientWidth;
  slideContainerB.scrollLeft -= slideWidth;
  console.log("prev")
})

//property slider;

let slidecontainerC = document.getElementById("slides-containerC")
let slideC = document.querySelector(".slideC")
let prevC = document.getElementById("slide-arrow-prevC")
let nextC = document.getElementById("slide-arrow-nextC")

nextC.addEventListener("click", ()=>{
  let slideWidth = slideC.clientWidth;
  slidecontainerC.scrollLeft += slideWidth
})
prevC.addEventListener("click", ()=>{
  let slideWidth = slideC.clientWidth;
  slidecontainerC.scrollLeft -= slideWidth;
})

//increse decrese number of Adults
document.getElementById("decreaseAdult").addEventListener("click",decreaseAdultValue)
document.getElementById("increaseAdult").addEventListener("click",increaseAdultValue)
let AdultStrength = document.getElementById('Adultnumber')
document.getElementById("adult").innerText = AdultStrength.value
function increaseAdultValue() {
  var value = parseInt(document.getElementById('Adultnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('Adultnumber').value = value;
  document.getElementById("adult").innerText = value
}

function decreaseAdultValue() {
  var value = parseInt(document.getElementById('Adultnumber').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('Adultnumber').value = value;
  document.getElementById("adult").innerText = value
}

//increse decrese number of child;

document.getElementById("decreaseChild").addEventListener("click",decreaseChildValue);
document.getElementById("increaseChild").addEventListener("click",increaseChildValue);

let ChildValue = document.getElementById("Childnumber")

document.getElementById("child").innerText = ChildValue.value;

function increaseChildValue(){
  var value = parseInt(ChildValue.value,10);
  value = isNaN(value)? 0 : value;
  value++;
  ChildValue.value = value;
  document.getElementById("child").innerText = value
}

function decreaseChildValue(){
   var value = parseInt(ChildValue.value,10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : '';
   value--;
   ChildValue.value = value;
  document.getElementById("child").innerText = value
}

//increase decrese number of rooms
document.getElementById("decreaseRoom").addEventListener("click",decreaseRoomValue);
document.getElementById("increaseRoom").addEventListener("click",increaseRoomValue);

let roomsValue = document.getElementById("Roomnumber")
document.getElementById("room").innerText = roomsValue.value;

function increaseRoomValue(){
  var value = parseInt(roomsValue.value,10)
  value = isNaN(value)? 0 : value;
  value++;
  roomsValue.value = value;
  document.getElementById("room").innerText = value
}
function decreaseRoomValue(){
  var value = parseInt(roomsValue.value,10);
  value = isNaN(value)? 0 : value;
  value < 1 ? value = 1 : '';
  value--
  roomsValue.value = value;
  document.getElementById("room").innerText = value
}

//popup of number of persons
let popup = document.getElementById("skPersonDiv")
document.getElementById("skPerson").addEventListener("click",openpopup)

function openpopup(){
  popup.classList.add("open_popup")
}
document.querySelector("#cross").addEventListener("click",closepopup)

function closepopup(){
  popup.classList.remove("open_popup")
}




//search query to local storage

let searchArr = [];

document.getElementById("searchBtn").addEventListener("click",()=>{
  searchResult()
})

const searchResult = () => {
  let query = document.getElementById("query").value;
  let chekin = document.getElementById("skCheckin").value;
  let chekout = document.getElementById("skCheckout").value;
  let adult = document.getElementById("adult").innerText;
  let child = document.getElementById("child").innerText;
  let room = document.getElementById("room").innerText;
  let searchObj = {
    query,
    chekin,
    chekout,
    adult,
    child,
    room,
  }
  searchArr.push(searchObj);
  localStorage.setItem("query",JSON.stringify(searchArr));
  console.log("query")
  if(query == "mumbai" || "Mumbai"){
    window.location.href = "city_mumbai.html"
  }else if(query == "delhi" || "Delhi"){
    window.location.href = "city_New_Delhi.html"
  }else if(query == "hyderabad" || "Hyderabad"){
    window.location.href = "city_hyderabad.html"
  }else if(query == "pune" || "Pune"){
    window.location.href = "city_pune.html"
  }
  document.getElementById("query").value = null;
  document.getElementById("skCheckin").value = null;
  document.getElementById("skCheckout").value = null;
  document.getElementById("adult").innerText = null;
  document.getElementById("child").innerText = null;
  document.getElementById("room").innerText = null;


}







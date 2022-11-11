import navbar from "../components/navbar.js";

let navbar_div = document.getElementById("top_navbar");
navbar_div.innerHTML = navbar();


let asia_arr = [
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=",
      title: "Pune to New Delhi",
      p: "Shortest flight time: 1h 58m"
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
      title:"Pune to Panaji",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
      title:"Pune to Dubai",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
      title:"Pune to Nagpur",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684561.jpg?k=3ede7a114072e3b2f1ddd032b266f5c05bdfeaa9c93444768d1aed21af1549ce&o=",
      title:"Pune to Chandigarh",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=",
      title:"Pune to Cochin",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=",
      title:"Pune to Kolkata",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/684569.jpg?k=a5ec6ac66c784664fb76a1f709993769fd7875bfcfdbc2c5efebb72f3782815f&o=",
      title:"Pune to Chennai",
      p:"Shortest flight time: 1h 58m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/815249.jpg?k=418082d8284286ae8e33dd92ba442657f804aadf849448472a93037750d66097&o=",
      title:"Pune to Bangalore",
      p:"Shortest flight time: 1h 58m",
    },
  ];

  let north_america_arr = [
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=",
      title:"Pune to New York",
      p:"Shortest flight time: 16h 17m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=",
      title:"Pune to San Francisco",
      p:"Shortest flight time: 17h 07m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=",
      title:"Pune to Toronto",
      p:"Shortest flight time: 16h 14m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/689744.jpg?k=3c7c6d59d968c2bade9003d9ebf8a1346455ce92abe94ffaa29247839161f09e&o=",
      title:"Pune to Chicago",
      p:"Shortest flight time: 16h 48m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=",
      title:"Pune to Los Angeles",
      p:"Shortest flight time: 16h 48m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/653280.jpg?k=22d48ac39a830a7f37538454fdb0857980fe22cda6ac1afd46d31db9453c0893&o=",
      title:"Pune to Vancouver",
      p:"Shortest flight time: 16h 48m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/689802.jpg?k=9b1b6e8f18bb474657e01465a6479d7d97def881d2e7610e8eb4f77719d5ed5f&o=",
      title:"Pune to Boston",
      p:"Shortest flight time: 15h 48m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/689586.jpg?k=970c12bc9abce21e6043c5ad0ba8bedaf27b105be29277b0215359a07f8192e3&o=",
      title:"Pune to Miami",
      p:"Shortest flight time: 18h 48m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/730722.jpg?k=a51979c9f7634ebc5d4753ff8d70725b872b16afa28527a63396c6745c0f9ab1&o=",
      title:"Pune to Sydney",
      p:"Shortest flight time: 14h 48m",
    },
  ];

let oceania_arr = [
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/682535.jpg?k=5a668b67965282725185c1ae8ba566c1a5edb7b72ae7d1e203b00a36d7eb6b96&o=",
      title:"Pune to Sydney",
      p:"Shortest flight time: 16h 17m",
    },
    {
      image:"https://q-xx.bstatic.com/xdata/images/city/square210/967877.jpg?k=18d14b862ca13e1e099d98c281202acdf8e80bacbf831bd66222ea03392d5d57&o=",
      title:"Pune to Melbourne",
      p:"Shortest flight time: 16h 17m",
    },
];

let europe_arr = [
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/640111.jpg?k=e0f82b6057243cbcf8f5cdce95e3685852a2ca80178735cee9bb00b66a941798&o=",
    title:"Pune to Genoa",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/972591.jpg?k=0730f8d7129afb9ba91bd055c801b061fc778dd1f5f82cfcc911e45e09703c64&o=",
    title:"Pune to Frankfurt/Main",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    title:"Pune to London",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/613087.jpg?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=",
    title:"Pune to Paris",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/972611.jpg?k=ad717a318610993a0d25cc1938fc17106d7a07b3489b89e239489f5e943756dd&o=",
    title:"Pune to Berlin",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/686019.jpg?k=6a598e32da7c3ad489629acee666681c9b8d9096951bcea1c2bc645e87ef260f&o=",
    title:"Pune to Zurich",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/682069.jpg?k=14bfdddeba8202c2dfa95e7d5b2fd28b8a2051275c352529b51c76c4bead3c2c&o=",
    title:"Pune to Dublin",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/683174.jpg?k=ad48b88bc31c1aa1b0f937c2a1152fc43ccd8a446d8596296dd849a74758808d&o=",
    title:"Pune to Munich",
    p:"Shortest flight time: 16h 17m",
  },

  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/976538.jpg?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o=",
    title:"Pune to Amsterdam",
    p:"Shortest flight time: 16h 17m",
  },
];

let africe_arr = [
{
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/953846.jpg?k=29f1aa324a747187330b2a8790c799118ef5b22185a0a235a3ab5117f8495006&o=",
    title:"Pune to Blue Bay",
    p:"Shortest flight time: 16h 17m",
  },
  {
    image:"https://q-xx.bstatic.com/xdata/images/city/square210/644363.jpg?k=d7dfbc64880d52cf00797f6a0e34568e4d25fc913a719a721a06832b5c5a9308&o=",
    title:"Pune to Cairo",
    p:"Shortest flight time: 16h 17m",
  },
];



let asia = document.getElementById("AKasia");
asia.addEventListener("click",()=>{
    appendSegments(asia_arr);
 });

 let north_america = document.getElementById("AKnorth_america");
north_america.addEventListener("click",()=>{
    appendSegments(north_america_arr);
 });

 let oceania = document.getElementById("AKoceania");
oceania.addEventListener("click",()=>{
    appendSegments(oceania_arr);
 });

 let europe = document.getElementById("AKeurope");
europe.addEventListener("click",()=>{
    appendSegments(europe_arr);
 });

 let africa = document.getElementById("AKafrica");
africa.addEventListener("click",()=>{
    appendSegments(africe_arr);
 });

 let appendSegments = (data)=>{
     let container = document.getElementById("AKsection-4-Container");
     container.innerHTML  = null;

     data.forEach((el)=>{
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
     
      let image = document.createElement("img");
      let title = document.createElement("h3");
      let p = document.createElement("p");

      image.src = el.image;
      title.innerText = el.title;
      p.innerText = el.p;

      div1.append(image);
      div2.append(title,p)
      div3.append(div1,div2)
      container.append(div3);
     })
 };
 appendSegments(asia_arr);




//  carousel code for Popular Flights
let popular_flights_arr = [
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684511.jpg?k=4ee759f0ea5c88e018f4e67af90dedaae2e34313d84b228b841bb2c8f3741875&o=",
    title: "Pune to Ahmedabad",
    date: "14 Nov - 21 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684652.jpg?k=5055a718205497d78d7d80b05c6cfbd59b79af5998231e50c23832e103087691&o=",
    title: "Pune to Hyderabad",
    date: "12 Nov - 19 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=",
    title: "Pune to Chennai",
    date: "15 Nov - 22 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/815249.jpg?k=418082d8284286ae8e33dd92ba442657f804aadf849448472a93037750d66097&o=",
    title: "Pune to Nagpur",
    date: "12 Nov - 19 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
    title: "Pune to Panaji",
    date: "13 Nov - 20 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684638.jpg?k=299dcb866812c888f4aa1db153b4c5bd503e26c1702176e9e50e4d8c39587bd7&o=",
    title: "Pune to Indore",
    date: "15 Nov - 22 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684681.jpg?k=9e89ba1d02bd495e1fcc1c936f0df718382523dece706a568f773d413b7ca961&o=",
    title: "Pune to Lucknow",
    date: "15 Nov - 22 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=",
    title: "Pune to New Delhi",
    date: "11 Nov - 18 Nov",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684655.jpg?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&o=",
    title: "Pune to Jaipur",
    date: "9 Nov - 16 Nov",
  },
];

let i = 0;
let pappend = (data) => {
  let first = document.getElementById("AK_pfirst");
  let second = document.getElementById("AK_psecond");
  let third = document.getElementById("AK_pthird");
  let fourth = document.getElementById("AK_pfourth");

  first.innerHTML = null;
  second.innerHTML = null;
  third.innerHTML = null;
  fourth.innerHTML = null;

  let image1 = document.createElement("img");
  let title1 = document.createElement("h3");
  let date1 = document.createElement("p");
  image1.src = data[i].image;
  title1.innerText = data[i].title;
  date1.innerText = data[i].date;

  let image2 = document.createElement("img");
  let title2 = document.createElement("h3");
  let date2 = document.createElement("p");
  image2.src = popular_flights_arr[i + 1].image;
  title2.innerText = popular_flights_arr[i + 1].title;
  date2.innerText = popular_flights_arr[i + 1].date;

  let image3 = document.createElement("img");
  let title3 = document.createElement("h3");
  let date3 = document.createElement("p");
  image3.src = popular_flights_arr[i + 2].image;
  title3.innerText = popular_flights_arr[i + 2].title;
  date3.innerText = popular_flights_arr[i + 2].date;

  let image4 = document.createElement("img");
  let title4 = document.createElement("h3");
  let date4 = document.createElement("p");
  image4.src = popular_flights_arr[i + 3].image;
  title4.innerText = popular_flights_arr[i + 3].title;
  date4.innerText = popular_flights_arr[i + 3].date;

  first.append(image1, title1, date1);
  second.append(image2, title2, date2);
  third.append(image3, title3, date3);
  fourth.append(image4, title4, date4);
};
pappend(popular_flights_arr);


let AK_pnext_btn = document.getElementById("AK_pnext");
AK_pnext_btn.addEventListener("click",()=>{
  pnext();
})
let pnext = () => {
    if(i == popular_flights_arr.length-5){
       return;
    }
  i++;
  pappend(popular_flights_arr);
};

let AK_pprevious_btn = document.getElementById("AK_pprevious");
AK_pprevious_btn.addEventListener("click",()=>{
  pprevious();
})

let pprevious = ()=>{
    if(i == 0){
        return;
    }
    i--;
    pappend(popular_flights_arr);
}




//Carousel code for Trending cities

let trending_cities_arr = [
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
    title: "Kuta, Indonesia",
    date: "14 Nov - 21 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
    title: "Bangalore, India",
    date: "12 Nov - 19 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=",
    title: "Male City, Maldives",
    date: "15 Nov - 22 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    title: "Toronto, Canada",
    date: "12 Nov - 19 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=",
    title: "Dubai, United Arab Empires",
    date: "13 Nov - 20 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",
    title: "Panaji, India",
    date: "15 Nov - 22 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/688060.jpg?k=57065d3be37fb33083964a32334c077cf3cbc52eac00202e887d8c20636514e6&o=",
    title: "New Delhi, India",
    date: "15 Nov - 22 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
    title: "London, United Kingdom",
    date: "11 Nov - 18 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=",
    title: "New York, United States of America",
    date: "9 Nov - 16 Nov - Round Trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=",
    title: "Bangkok, Thailand",
    date: "9 Nov - 16 Nov - Round Trip",
  },
];

let j = 0;
let tappend = (data) => {
  let first = document.getElementById("AK_tfirst");
  let second = document.getElementById("AK_tsecond");
  let third = document.getElementById("AK_tthird");
  let fourth = document.getElementById("AK_tfourth");

  first.innerHTML = null;
  second.innerHTML = null;
  third.innerHTML = null;
  fourth.innerHTML = null;

  let image1 = document.createElement("img");
  let title1 = document.createElement("h3");
  let date1 = document.createElement("p");
  image1.src = data[j].image;
  title1.innerText = data[j].title;
  date1.innerText = data[j].date;

  let image2 = document.createElement("img");
  let title2 = document.createElement("h3");
  let date2 = document.createElement("p");
  image2.src = trending_cities_arr[j + 1].image;
  title2.innerText = trending_cities_arr[j + 1].title;
  date2.innerText = trending_cities_arr[j + 1].date;

  let image3 = document.createElement("img");
  let title3 = document.createElement("h3");
  let date3 = document.createElement("p");
  image3.src = trending_cities_arr[j + 2].image;
  title3.innerText = trending_cities_arr[j + 2].title;
  date3.innerText = trending_cities_arr[j + 2].date;

  let image4 = document.createElement("img");
  let title4 = document.createElement("h3");
  let date4 = document.createElement("p");
  image4.src = trending_cities_arr[j + 3].image;
  title4.innerText = trending_cities_arr[j + 3].title;
  date4.innerText = trending_cities_arr[j + 3].date;

  first.append(image1, title1, date1);
  second.append(image2, title2, date2);
  third.append(image3, title3, date3);
  fourth.append(image4, title4, date4);
};
tappend(trending_cities_arr);


let AK_tnext_btn = document.getElementById("AK_tnext");
AK_tnext_btn.addEventListener("click",()=>{
  tnext();
})
let tnext = () => {
    if(j == trending_cities_arr.length-5){
       return;
    }
  j++;
  tappend(trending_cities_arr);
};

let AK_tprevious_btn = document.getElementById("AK_tprevious");
AK_tprevious_btn.addEventListener("click",()=>{
  tprevious();
})
let tprevious = ()=>{
    if(j == 0){
        return;
    }
    j--;
    tappend(trending_cities_arr);
}



// Search flights functionality

let search_form = document.getElementById("AKsearchdata");
search_form.addEventListener("submit",()=>{
    getSearchData(event);
})

let getSearchData = (e)=>{
  e.preventDefault();

  let from = document.getElementById("AKfrom");
  let to = document.getElementById("AKto"); 
}
// let api = "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city"

let imagesArr = [
    "https://drive.google.com/uc?export=view&id=1JsJIUh36pLiiMkSMyLjIfYU8d-PdWe5z",
    "https://drive.google.com/uc?export=view&id=1Jf9WtG0VQgpdNrfxawGwJBpzVAuAgCW5",
    "https://drive.google.com/uc?export=view&id=1f3NGuMZlCA7xg2cSv3GpJ2W4rb9rcN9x",
    "https://drive.google.com/uc?export=view&id=1JmQo74orm_9qr3c3B1vYEZ-ihRC2myTL",
    "https://drive.google.com/uc?export=view&id=16j-2lK0BtdLNW4Hqf8Wrc3iU8ywNs3u_",
]

let container = document.getElementById("homevideo")

let index = 0;
let start = setInterval(() => {
    
    if(index===imagesArr.length){
        index = 0
    }
    container.innerHTML = null;
    let image = document.createElement("img")
    image.src = imagesArr[index];
    image.id = "gif"
    // document.getElementById('gif').className += "fadeOut"
    container.append(image)
    index++
},6000);





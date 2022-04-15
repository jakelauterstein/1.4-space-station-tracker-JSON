const mymap = L.map('issMap').setView([0, 0], 1);
const marker =     L.marker([0, 0]).addTo(mymap)

const attribution = 
    '&copy; <a href= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, {attribution}  )
    tiles.addTo(mymap);
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data

    document.getElementById('lat').textContent = latitude
    document.getElementById('lon').textContent = longitude

    // L.marker([latitude, longitude]).addTo(mymap)
    marker.setLatLng([latitude, longitude]);


    console.log(data);
    console.log(latitude);
    console.log(longitude);
    var i = 0;
    i++;

    if (i > 4) {
        clearInterval(myInterval);
    }
}

// getISS();

myInterval = setInterval(getISS, 1000);




// get advice on how to utilize clear interval with this

// const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

// async function getISS() {
//     const response = await fetch(api_url);
//     const data = await response.json();
//     const {latitude, longitude} = data

//     document.getElementById('lat').textContent = latitude
//     document.getElementById('lon').textContent = longitude


//     console.log(data);
//     console.log(latitude);
//     console.log(longitude);
//     var i = 0;
//     i++;

//     if (i > 4) {
//         clearInterval(myInterval);
//     }
// }

// // getISS();

// myInterval = setInterval(getISS, 1000);



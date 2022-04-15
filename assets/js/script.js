// making a map and tiles

const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = 
    '&copy; <a href= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, {attribution}  )
    tiles.addTo(mymap);

// making a marker with a custom icon

const issIcon = L.icon({
    iconUrl: '320px-International_Space_Station.svg.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon}).addTo(mymap)


const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

let firstTime = true

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data

    document.getElementById('lat').textContent = latitude.toFixed(2)
    document.getElementById('lon').textContent = longitude.toFixed(2)

    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
        mymap.setView([latitude, longitude], 1.1)
        firstTime = false;
    }
    

    console.log(data);
    console.log(latitude);
    console.log(longitude);
    var i = 0;
    i++;


}

getISS();

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



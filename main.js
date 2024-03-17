let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [longitude,latitude],
    zoom: 4
})

var img1 = document.querySelector("#ellora-caves")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.17722636955112, 20.027006143247483])
.addTo(map)

var img2 = document.querySelector("#india-gate")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([77.22999249256486, 28.6131568584162])
.addTo(map)

var img3 = document.querySelector("#mahabalipuram")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([80.1911419639469, 12.621991235577745])
.addTo(map)

var img4 = document.querySelector("#taj-mahal")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([78.0423889581379, 27.175402478481068])
.addTo(map)

var img5 = document.querySelector("#statue-of-unity")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([73.76464369326555, 21.8806556617905])
.addTo(map)

var img6 = document.querySelector("#victoria-memorial")

var marker6 = new mapboxgl.Marker({
    element:img6
})
.setLngLat([88.34287965982088, 22.54511535625475])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)
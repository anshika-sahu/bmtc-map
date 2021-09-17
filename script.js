window.onload = function () {



    center_latitude = data.latitude_current[0];
    center_longitude = data.longitude_current[0];
    // [12.97582743, 77.60564176]

    var mymap = L.map('mapid').setView([center_latitude, center_longitude], 12);

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(mymap)

    // var bangalore_tiles = L.geoJson(bangalore_geojson);
    // bangalore_tiles.addTo(mymap);
    var bangalore_outer_tile = L.geoJson(bangalore_outer_geojson);
    bangalore_outer_tile.addTo(mymap);

    var data_size = data.bus_stop_name.length

    for (var i = 0; i < data_size; i++) {
        bus_stop_name = data.bus_stop_name[i];
        latitude = data.latitude_current[i];
        longitude = data.longitude_current[i];

        L.marker([latitude
            , longitude
        ]).addTo(mymap).bindPopup(bus_stop_name);
    }
}
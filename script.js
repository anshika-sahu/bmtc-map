window.onload = function () {

    // ------------------------------------------
    // FOR THE USER TO UPDATE THE COLUMN NAMES
    const name_column = "depot_start_point";
    const latitude_column = "latitude_current";
    const longitude_column = "longitude_current";
    // ------------------------------------------

    bangalore_center_latitude = 12.95456329;
    bangalore_center_longitude = 77.59526879;

    var mymap = L.map('mapid').setView([bangalore_center_latitude, bangalore_center_longitude], 11);

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(mymap)

    // var bangalore_tiles = L.geoJson(bangalore_geojson);
    // bangalore_tiles.addTo(mymap);
    var bangalore_outer_tile = L.geoJson(bangalore_outer_geojson);
    bangalore_outer_tile.addTo(mymap);

    var data_size = data.depot_start_point.length

    for (var i = 0; i < data_size; i++) {
        bus_stop_name = data[name_column][i];
        latitude = data[latitude_column][i];
        longitude = data[longitude_column][i];

        L.marker([latitude
            , longitude
        ]).addTo(mymap).bindPopup(bus_stop_name);
    }
}
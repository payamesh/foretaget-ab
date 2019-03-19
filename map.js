/* var lat = 34.070;
var lon = -118.73;
var zoom = 15;
var map;

function init() {
    map = new OpenLayers.Map("map", {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.PanZoomBar(),
            new OpenLayers.Control.LayerSwitcher(),
            new OpenLayers.Control.Attribution()
        ],
        maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
        maxResolution: 156543.0399,
        numZoomLevels: 19,
        units: 'm',
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: new OpenLayers.Projection("EPSG:4326")
    });


    map.addLayer(new OpenLayers.Layer.OSM());

    var lonLat = new OpenLayers.LonLat(lon, lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));

    map.setCenter(lonLat, zoom);

    //Initialise the vector layer using OpenLayers.Format.OSM
    var layer = new OpenLayers.Layer.Vector("Polygon", {
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
            url: "myosmfile.osm", //<-- relative or absolute URL to your .osm file
            format: new OpenLayers.Format.OSM()
        }),
        projection: new OpenLayers.Projection("EPSG:4326")
    });

    map.addLayers([layer]);

}

init() */
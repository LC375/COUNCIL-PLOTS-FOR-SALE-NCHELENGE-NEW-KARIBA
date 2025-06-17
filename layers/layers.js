ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20935").setExtent([685675.155253, 8964739.634617, 693047.832151, 8969876.202918]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PLOTS_1 = new ol.format.GeoJSON();
var features_PLOTS_1 = format_PLOTS_1.readFeatures(json_PLOTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_PLOTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLOTS_1.addFeatures(features_PLOTS_1);
var lyr_PLOTS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLOTS_1, 
                style: style_PLOTS_1,
                popuplayertitle: 'PLOTS',
                interactive: true,
    title: 'PLOTS<br />\
    <img src="styles/legend/PLOTS_1_0.png" /> FIRE STATION - NTC<br />\
    <img src="styles/legend/PLOTS_1_1.png" /> NOT FOR SALE<br />\
    <img src="styles/legend/PLOTS_1_2.png" /> Not Offloaded<br />\
    <img src="styles/legend/PLOTS_1_3.png" /> Occupied<br />\
    <img src="styles/legend/PLOTS_1_4.png" /> Occupied - NTC<br />\
    <img src="styles/legend/PLOTS_1_5.png" /> Offloaded<br />\
    <img src="styles/legend/PLOTS_1_6.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PLOTS_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PLOTS_1];
lyr_PLOTS_1.set('fieldAliases', {'Id': 'Id', 'Plot_NO': 'Plot_NO', 'LANDUSE': 'LANDUSE', 'PLot Size ': 'PLot Size ', 'Status': 'Status', 'Price ZMW': 'Price ZMW', });
lyr_PLOTS_1.set('fieldImages', {'Id': 'TextEdit', 'Plot_NO': 'TextEdit', 'LANDUSE': 'TextEdit', 'PLot Size ': 'TextEdit', 'Status': 'TextEdit', 'Price ZMW': 'TextEdit', });
lyr_PLOTS_1.set('fieldLabels', {'Id': 'no label', 'Plot_NO': 'inline label - always visible', 'LANDUSE': 'inline label - always visible', 'PLot Size ': 'inline label - always visible', 'Status': 'inline label - always visible', 'Price ZMW': 'inline label - always visible', });
lyr_PLOTS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
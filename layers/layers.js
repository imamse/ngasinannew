var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_yes_1 = new ol.format.GeoJSON();
var features_building_yes_1 = format_building_yes_1.readFeatures(json_building_yes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_1.addFeatures(features_building_yes_1);
var lyr_building_yes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_yes_1, 
                style: style_building_yes_1,
                interactive: true,
                title: '<img src="styles/legend/building_yes_1.png" /> building_yes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_yes_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_yes_1];
lyr_building_yes_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'government': 'government', 'name': 'name', 'office': 'office', 'craft': 'craft', 'amenity': 'amenity', 'religion': 'religion', 'shop': 'shop', 'healthcare': 'healthcare', 'operator': 'operator', 'layer': 'layer', });
lyr_building_yes_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:city': '', 'addr:postcode': '', 'addr:street': '', 'building': '', 'government': '', 'name': '', 'office': '', 'craft': '', 'amenity': '', 'religion': '', 'shop': '', 'healthcare': '', 'operator': '', 'layer': '', });
lyr_building_yes_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'building': 'no label', 'government': 'no label', 'name': 'no label', 'office': 'no label', 'craft': 'no label', 'amenity': 'no label', 'religion': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'operator': 'no label', 'layer': 'no label', });
lyr_building_yes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PlanIGNv2_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN v2',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_1, 0]);
var format_Parcelles_intersectees_voie_verte_2 = new ol.format.GeoJSON();
var features_Parcelles_intersectees_voie_verte_2 = format_Parcelles_intersectees_voie_verte_2.readFeatures(json_Parcelles_intersectees_voie_verte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_intersectees_voie_verte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_intersectees_voie_verte_2.addFeatures(features_Parcelles_intersectees_voie_verte_2);
var lyr_Parcelles_intersectees_voie_verte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_intersectees_voie_verte_2, 
                style: style_Parcelles_intersectees_voie_verte_2,
                popuplayertitle: 'Parcelles_intersectees_voie_verte',
                interactive: true,
    title: 'Parcelles_intersectees_voie_verte<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_0.png" /> COMMUNAUTE DE COMMUNES DE MILLAU GRANDS CAUSSES<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_1.png" /> COMMUNE DE MILLAU<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_2.png" /> ETAT PAR DIRECTION DE L IMMOBILIER DE L ETAT<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_3.png" /> GOMEZ CEDRIC<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_4.png" /> GRAND MARIE THERESE PAULETTE<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_5.png" /> HABITER 12<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_6.png" /> JULIEN ELIANE<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_7.png" /> LADET ALAIN RAYMOND DOMINIQUE<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_8.png" /> LADET JEAN LUC<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_9.png" /> RASCALOU BERNARD FRANCOIS MARIE<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_10.png" /> RASCALOU JEAN MICHEL LOUIS JOSEPH<br />\
    <img src="styles/legend/Parcelles_intersectees_voie_verte_2_11.png" /> SOCIETE NATIONALE SNCF<br />'
        });
var format_Trace_Millau_Aguessac_Dec_2024_3 = new ol.format.GeoJSON();
var features_Trace_Millau_Aguessac_Dec_2024_3 = format_Trace_Millau_Aguessac_Dec_2024_3.readFeatures(json_Trace_Millau_Aguessac_Dec_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace_Millau_Aguessac_Dec_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace_Millau_Aguessac_Dec_2024_3.addFeatures(features_Trace_Millau_Aguessac_Dec_2024_3);
var lyr_Trace_Millau_Aguessac_Dec_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trace_Millau_Aguessac_Dec_2024_3, 
                style: style_Trace_Millau_Aguessac_Dec_2024_3,
                popuplayertitle: 'Trace_Millau_Aguessac_Dec_2024',
                interactive: true,
                title: '<img src="styles/legend/Trace_Millau_Aguessac_Dec_2024_3.png" /> Trace_Millau_Aguessac_Dec_2024'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PlanIGNv2_1.setVisible(true);lyr_Parcelles_intersectees_voie_verte_2.setVisible(true);lyr_Trace_Millau_Aguessac_Dec_2024_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PlanIGNv2_1,lyr_Parcelles_intersectees_voie_verte_2,lyr_Trace_Millau_Aguessac_Dec_2024_3];
lyr_Parcelles_intersectees_voie_verte_2.set('fieldAliases', {'gid': 'gid', 'insee': 'insee', 'idu': 'idu', 'tex': 'tex', 'secnum': 'secnum', 'supf': 'supf', 'nom': 'nom', 'coar': 'coar', 'indp': 'indp', 'andgi': 'andgi', 'encours': 'encours', 'creat_date': 'creat_date', 'update_dat': 'update_dat', 'ident': 'ident', });
lyr_Trace_Millau_Aguessac_Dec_2024_3.set('fieldAliases', {'id': 'id', });
lyr_Parcelles_intersectees_voie_verte_2.set('fieldImages', {'gid': 'Range', 'insee': 'TextEdit', 'idu': 'TextEdit', 'tex': 'TextEdit', 'secnum': 'TextEdit', 'supf': 'TextEdit', 'nom': 'TextEdit', 'coar': 'TextEdit', 'indp': 'TextEdit', 'andgi': 'Range', 'encours': 'Range', 'creat_date': 'DateTime', 'update_dat': 'DateTime', 'ident': 'TextEdit', });
lyr_Trace_Millau_Aguessac_Dec_2024_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Parcelles_intersectees_voie_verte_2.set('fieldLabels', {'gid': 'hidden field', 'insee': 'hidden field', 'idu': 'no label', 'tex': 'no label', 'secnum': 'no label', 'supf': 'no label', 'nom': 'no label', 'coar': 'no label', 'indp': 'hidden field', 'andgi': 'hidden field', 'encours': 'hidden field', 'creat_date': 'hidden field', 'update_dat': 'hidden field', 'ident': 'no label', });
lyr_Trace_Millau_Aguessac_Dec_2024_3.set('fieldLabels', {'id': 'no label', });
lyr_Trace_Millau_Aguessac_Dec_2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
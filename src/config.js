/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 23.33386,
		lat: 49.54416,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Layers/Шари',
		editWith: 'Edit/Редагувати :',
		openWith: 'Open/відчинено:',
		checkTools: 'Valida/Перевірка :',
		copyDialog: 'посилання скопійовано на шпалери . Link has been copied',
		nodeLabel: 'Node/Вузол :',
		noNodesFound: 'No info/Немає інформації .',
		wayLabel: 'Way/дорога:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			group: 'test',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap B&W',
			group: 'test',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap France',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenMapSurfer',
			iconSrc: imgSrc + 'openroute_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>, powered by <a href="https://mapsurfernet.com/" target="_blank">MapSurfer.NET</a>',
				url: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'PL_Geoportal',
			iconSrc: imgSrc + 'geoportalpl.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Geoportal.pl &mdash; Source: Geoportal.pl',
				url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution',
				params: {'LAYERS': 'Raster'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [


		{
			group: 'Name:uk',
			title: 'Things with name:uk',
			query: '(node["name:uk"]({{bbox}});node(w);way["name:uk"]({{bbox}});node(w);relation["name:uk"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'flag_ukraine.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,255,0.4)',
					width: 2
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '14px Arial bold',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Name:uk',
			title: 'Name:uk node',
			query: '(node["name:uk"]["name"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'flag_ukraine.svg',
			iconStyle: 'background-color:#008000',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: '#008000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Name:uk',
			title: 'Name:uk way',
			query: '(way["name:uk"]["name"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'flag_ukraine.svg',
			iconStyle: 'background-color:#008000',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,128,0,0.1)',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								placement:'line',
								font: '14px Verdana'
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Name:uk',
			title: 'Name:uk relation',
			query: '(relation["name:uk"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'flag_ukraine.svg',
			iconStyle: 'background-color:#008000',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: '#008000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								placement: 'line',
								font: '14px Verdana'
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Name:uk',
			title: 'No name:uk node',
			query: '(node[!"name:uk"]["name"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'flag_ukraine_question.svg',
			iconStyle: 'background-color:#ff0000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Name:uk',
			title: 'No Name:uk way',
			query: '(way[!"name:uk"]["name"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'flag_ukraine_question.svg',
			iconStyle: 'background-color:#ff0000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								placement:'line',
								font: '14px Verdana'
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Name:uk',
			title: 'No Name:uk relation',
			query: '(relation[!"name:uk"]["name"]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'flag_ukraine_question.svg',
			iconStyle: 'background-color:#ff0000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								color: 'white',
								text: name,
								placement: 'line',
								font: '14px Verdana'
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Reception points/Прийомні пункти',
			query: '(node["social_facility"="outreach"]["social_facility:for"="refugee"]({{bbox}});node(w);way["social_facility"="outreach"]["social_facility:for"="refugee"]({{bbox}});node(w);relation["social_facility"="outreach"]["social_facility:for"="refugee"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/social_facility.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		{
			group: 'Amenities/об\'єкта ',
			title: 'Food bank/продовольчий банк',
			query: '(node["social_facility"="food_bank"]({{bbox}});node(w);way["social_facility"="food_bank"]({{bbox}});node(w);relation["social_facility"="food_bank"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/shop/greengrocer.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Soup kitchen/супова кухня',
			query: '(node["social_facility"="soup_kitchen"]({{bbox}});node(w);way["social_facility"="soup_kitchen"]({{bbox}});node(w);relation["social_facility"="soup_kitchen"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/cafe.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Information points/Інформаційні пункти',
			query: '(node["information:for"="refugee"]({{bbox}});node(w);way["information:for"="refugee"]({{bbox}});node(w);relation["information:for"="refugee"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/tourism/office.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Pharmacy/Аптеки',
			query: '(node["amenity"="pharmacy"]({{bbox}});node(w);way["amenity"="pharmacy"]({{bbox}});node(w);relation["amenity"="pharmacy"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/pharmacy.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Hospital/Лікарні',
			query: '(node["amenity"="hospital"]({{bbox}});node(w);way["amenity"="hospital"]({{bbox}});node(w);relation["amenity"="hospital"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/hospital.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Amenities/об\'єкта ',
			title: 'Doctors/Лікарі',
			query: '(node["amenity"="doctors"]({{bbox}});node(w);way["amenity"="doctors"]({{bbox}});node(w);relation["amenity"="doctors"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/amenity/doctors.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		{
			group: 'Amenities/об\'єкта ',
			title: 'Consulates/консульства',
			query: '(node["office"="diplomatic"]["country"="UA"]({{bbox}});node(w);way["office"="diplomatic"]["country"="UA"]({{bbox}});node(w);relation["office"="diplomatic"]["country"="UA"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/symbols/tourism/information.svg',
			iconStyle: 'background-color:#ffFFFF',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 0.5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
    },
		{
			group: 'Test',
			title: 'Dopomoha OSMData (visit <br><a href="https://www.dopomoha.pl">Dopomoha</a>',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/osm_data.geojson',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
var name = feature.get(name_key) || '';
				var styles = {
					'information:for': {
						'refugee': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src:  'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/tourism/office.svg'
						}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'refugees': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/tourism/office.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
						
				},

					'consulate': {
						'yes': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src:  'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/tourism/information.svg'
						}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
						
				},
					'social_facility': {
						'outreach': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/social_facility.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'soup_kitchen': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/cafe.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'food_bank': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/shop/greengrocer.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
					
					},
					'amenity': {
						'pharmacy': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/pharmacy.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'doctors': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/doctors.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'hospital': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/hospital.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
					
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:S570': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.png'
					})
						})
					},
					'traffic_sign:backward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
					})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
 },
		{
			group: 'Test',
			title: 'Dopomoha Zbiorki',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/zbiorki.geojson',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:uk$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
var name = feature.get(name_key) || '';
				var styles = {
					'name': {
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/tourism/office.svg'
							}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						})
						
				},
					'social_facility': {
						'outreach': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/social_facility.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'soup_kitchen': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/cafe.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'food_bank': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/shop/greengrocer.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
					
					},
					'amenity': {
						'pharmacy': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/pharmacy.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'doctors': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/doctors.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						}),
						'hospital': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 1,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/amenity/hospital.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 30
					})
						
						}),
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/osmhelpukrainemap/main/src/img/icones/symbols/place/place-capital-8.svg'
							})
						})
					
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:S570': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.png'
					})
						})
					},
					'traffic_sign:backward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
					})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Name:uk',
			title: 'No UK data',
			query: '(way[highway][!name:uk]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,51,51,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,51,51,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
			
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));
		//Mapcomplete editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fhelpukraine.json&language=ca#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapcomplete_logo.png', height: 20, width: 20})));
		
		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//OSMAnd
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSMAnd', href: 'https://osmand.net/go.html?lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&z=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};

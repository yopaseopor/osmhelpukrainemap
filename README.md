# OSM Help Ukraine Map

Based on ideas of `https://osm-catalan.github.io/osmcatmap/` and `https://github.com/Ripollx/osmcatmap2` .
Developed with [OpenLayers](https://openlayers.org/) library  and with API from [Overpass Turbo](https://wiki.openstreetmap.org/wiki/Overpass_turbo) available on [Overpass Turbo website](https://overpass-turbo.eu/).

## Features:

-Map based on [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

-With modifications of [Ramiro Balado](https://github.com/Qjammer)

-New Openlayers version done by [Ripollx](https://github.com/Ripollx)

-Possibility of show outside JSONs by [Hugoren Martinako ](https://github.com/Crashillo)

-Complex queries possibility done by [Ismael Luceno](https://github.com/ismaell)

-Additional ideas by [yopaseopor](https://github.com/yopaseopor)

OSM Help Ukraine Map shows items on the map in Ukranianian language to help the refugees . Also it is combined with a Mapcomplete quest that allows to insert the name:uk key and value to all name item.

### 1-Tags

We are using this key:

*name:uk

#### Using

You can modify the page editing these files:
* index.html contains the structure of the page.
* index.js contains the orchestrator to use OpenLayers (only modify if toy want to add new functionalities).
* config.js contains definition of layers, languages and characteristics you want to show.

### 2-Mapcomplete

Using [Mapcomplete custom quest](https://mapcomplete.osm.be) - [source](https://github.com/pietervdvn/MapComplete) - to add Ukranianian language with the only requirement of [being user of d'OpenStreetMap](https://www.openstreetmap.org/login).

# Agraïments
To [Comunitat Catalana d'Openstreetmap](https://t.me/osmcat) and [OSM España](https://t.me/osmes) for allowing do these maps, also to the developers who have helped with the project .

## [Map here](https://yopaseopor.github.io/osmhelpukrainemap)

## [Mapcomplete query about Help Ukrania](https://mapcomplete.osm.be/theme.html?userlayout=https://raw.githubusercontent.com/yopaseopor/mcquests/main/helpukraine.json)

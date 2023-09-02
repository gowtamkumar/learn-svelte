<script>
  import { onMount } from "svelte";
  import "ol/ol.css"; // Import OpenLayers styles
  import Map from "ol/Map.js";
  import View from "ol/View.js";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
  import { OSM, Vector as VectorSource } from "ol/source.js";
  import GeoJSON from "ol/format/GeoJSON.js";

  let map;

  onMount(() => {
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    fetch("./countries.geojson")
      .then((response) => response.json())
      .then((geojson) => {
        const vectorSource = new VectorSource({
          features: new GeoJSON().readFeatures(geojson),
        });

        const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgba(255, 0, 0, 0.2)", // Fill color
            }),
            stroke: new Stroke({
              color: "red", // Stroke color
              width: 2, // Stroke width
            }),
          }),
        });

        map.addLayer(vectorLayer);
      });
  });
</script>

<main>
  <div id="map" />
</main>

<style>
  #map {
    width: 100vw; /* Full-width */
    height: 100vh; /* Full-height */
  }
</style>

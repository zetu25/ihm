<template>
  <v-container>
    <v-row class="text-center">
      <v-col id="mapContainer" />
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { geojson } from '../store/regions'

export default {
  name: "Map",
  data() {
    return {
      center: [46.75, 2.1667],
      // geojson
    };
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer").setView(this.center, 5.5);
      L.tileLayer("//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
        attribution:
          'Gare SNCF Map &copy; <a href="//osm.org/copyright">OpenStreetMap</a>',
        minZoom: 1,
        maxZoom: 20,
      }).addTo(mapDiv);
      // L.geoJson(this.geojson).addTo(mapDiv);
      // let circle = L.circle([48.856852295929485,2.342523640625016], {
      //   color: "red",
      //   fillColor: "#f03",
      //   fillOpacity: 0.5,
      //   radius: 15000,
      // });
      // circle.addTo(mapDiv);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  /* width: 600px; */
  height: 600px;
}
</style>
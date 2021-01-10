<template>
  <v-app>
    <v-app-bar app color="#003B93" dark>
      <img
        src="./assets/Logo_SNCF.png"
        alt="Logo SNCF"
        width="170px"
        height="60px"
      />
      <v-spacer></v-spacer>
      <h3>
        Evolution et proportion des objets perdus et restitués en France 2020
      </h3>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/zetu25/ihm" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- Objets retrounés et rendus -->
      <v-row justify="center">
        <h2>Objets retrouvés et rendus à leurs propriétaires</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <returned-object-per-month></returned-object-per-month>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="auto">
          <returned-object></returned-object>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="auto">
          <returned-bar-chart></returned-bar-chart>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <!-- Objets perdus -->
      <v-row justify="center">
        <h2>Objets perdus</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <lost-bar-chart></lost-bar-chart>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="auto">
          <lost-object></lost-object>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="auto">
          <lost-object-per-month></lost-object-per-month>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ReturnedObject from "./components/ReturnedObject.vue";
import ReturnedObjectPerMonth from "./components/ReturnedObjectPerMonth.vue";
import LostObject from "./components/LostObject.vue";
import LostObjectPerMonth from "./components/LostObjectPerMonth.vue";
import LostBarChart from "./components/LostBarChart.vue";
import ReturnedBarChart from "./components/ReturnedBarChart.vue";

export default {
  name: "App",
  components: {
    ReturnedObject,
    LostObject,
    LostObjectPerMonth,
    ReturnedObjectPerMonth,
    LostBarChart,
    ReturnedBarChart,
  },
};
</script>
<style >
.main {
  background-image: url("./assets/background.jpg");
  background-size: cover;
}
</style>

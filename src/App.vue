<template>
  <v-app>
    <v-app-bar app color="#003B93" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/zetu25/ihm" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col cols="6">
          <returned-object></returned-object>
        </v-col>
        <v-col cols="6">
          <lost-object></lost-object>
        </v-col>
      </v-row>
      <v-row>
        <lost-object-per-month></lost-object-per-month>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ReturnedObject from "./components/ReturnedObject.vue";
import LostObject from "./components/LostObject.vue";
import { mapActions } from "vuex";
import LostObjectPerMonth from './components/LostObjectPerMonth.vue';
export default {
  name: "App",
  methods: {
    ...mapActions("returnedDonut",["changeReturnedObjectData"]),
    ...mapActions("lostDonut",["changeLostObjectData"]),
  },
  components: {
    ReturnedObject,
    LostObject,
    LostObjectPerMonth,
  },
  mounted() {
    this.changeReturnedObjectData();
    this.changeLostObjectData();
  },
};
</script>

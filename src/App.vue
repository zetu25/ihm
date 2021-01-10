<template>
  <v-app>
    <v-app-bar app color="#003B93" dark>
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
      <v-divider inset ></v-divider>
      <v-row>
        <v-col cols="6">
          <returned-object-per-month></returned-object-per-month>
        </v-col>
        <v-col cols="6">
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions([
      "returnedDonut/changeReturnedObjectData",
      "lostDonut/changeLostObjectData",
      "returnedPerMonth/changeReturnedObjectData",
    ]),
  },
  components: {
    ReturnedObject,
    LostObject,
    LostObjectPerMonth,
    ReturnedObjectPerMonth,
  },
  computed: {
    ...mapGetters("returnedDonut", ["getReturnedObjectData"]),
  },
  async created() {
    this["returnedDonut/changeReturnedObjectData"]();
    this["lostDonut/changeLostObjectData"]();
    // this["returnedPerMonth/changeReturnedObjectData"]();
  },
};
</script>

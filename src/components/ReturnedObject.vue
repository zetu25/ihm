<template>
  <canvas id="doughnutReturnedObjects-chart"></canvas>
</template>

<script>
import {  mapGetters, mapActions } from "vuex";
import createChart from "../makechart";

export default {
  name: "ReturnedObject",
  methods: {
    ...mapActions("returnedDonut",["changeReturnedObjectData"]),
  },
  computed: {
    ...mapGetters("returnedDonut",[ "getReturnedObjectData" ]),
  },
  mounted() {
    createChart("doughnutReturnedObjects-chart", this.getReturnedObjectData);
  },
};
</script>

<style>
</style>
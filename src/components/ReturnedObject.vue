<template>
  <canvas id="doughnutReturnedObjects-chart"></canvas>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import createChart from "../makechart";

export default {
  name: "ReturnedObject",
  methods: {
    ...mapActions(["changeReturnedObjectData"]),
  },
  computed: {
    ...mapGetters({ data: "getReturnedObjectData" }),
  },
  mounted() {
    this.changeReturnedObjectData();
    createChart("doughnutReturnedObjects-chart", this.data);
  },
};
</script>

<style>
</style>
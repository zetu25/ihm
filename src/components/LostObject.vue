<template>
  <canvas id="doughnutLostObjects-chart"></canvas>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import createChart from "../makechart";

export default {
  name: "LostObject",
  methods: {
    ...mapActions(["changeLostObjectData"]),
  },
  computed: {
    ...mapGetters({ data: "getLostObjectData" }),
  },
  mounted() {
    this.changeLostObjectData();
    createChart("doughnutLostObjects-chart", this.data);
  },
};
</script>

<style>
</style>
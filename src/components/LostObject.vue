<template>
  <canvas id="doughnutLostObjects-chart"></canvas>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import createChart from "../makechart";

export default {
  name: "LostObject",
  methods: {
    ...mapActions("lostDonut",["changeLostObjectData"]),
  },
  computed: {
    ...mapGetters("lostDonut",["getLostObjectData","getLoad"]),
  },
  async mounted() {
    createChart("doughnutLostObjects-chart", this.getLostObjectData);
  },
};
</script>

<style>
</style>
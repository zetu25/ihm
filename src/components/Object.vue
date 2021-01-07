<template>
  <v-col>
    <canvas id="doughnut-chart"></canvas>
  </v-col>
  <!-- <canvas class="fzefe" id="doughnut-chart"></canvas> -->
</template>

<script>
import Chart from "chart.js";


export default {
  
  methods: {
    createChart(chartId, chartData) {
      console.log(this.$store.getters.get_data);
      let ctx = document.getElementById(chartId);
      /* eslint-disable no-unused-vars */
      let myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      /* eslint-enable no-unused-vars */
    },
  },
  computed: {
    data() {
      return this.$store.getters.get_data;
    },
  },
  mounted() {
    this.$store.dispatch("changeReturnedObjectData");
    this.createChart("doughnut-chart", this.data);
  },
};
</script>

<style>
</style>
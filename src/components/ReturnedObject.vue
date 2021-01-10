<template>
  <canvas id="doughnutReturnedObjects-chart"></canvas>
</template>

<script>
import { mapGetters } from "vuex";
import createChart from "../makechart";

export default {
  name: "ReturnedObject",
  methods: {},
  computed: {
    ...mapGetters("returnedDonut", ["getReturnedObjectData"]),
  },
  mounted() {
    createChart("doughnutReturnedObjects-chart", this.getReturnedObjectData);
    
  },
};
</script>

<style>
</style>
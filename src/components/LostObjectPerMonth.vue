<template>
  <canvas id="lineLostObject-chart"></canvas>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import createChart from "../makechart";

export default {
  name: "LostObjectPerMonth",
  methods: {
    ...mapActions("lostPerMonth",["changeLostObjectData"]),
  },
  computed: {
    ...mapGetters("lostPerMonth",["getLostObjectData"]),
  },
  mounted() {
    createChart("lineLostObject-chart", this.getLostObjectData);
  },
};
</script>

<style>
</style>
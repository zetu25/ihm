<template>
  <v-container class="container">
    <doughnut-chart
      v-if="this.getLoaded"
      :chartdata="chartdata"
      :options="this.setTitle"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DoughnutChart from "./Doughnut.vue";
import axios from "axios";
import hexToRgba from "hex-to-rgba";
import colorGradient from "../store/colors";

export default {
  name: "LostObject",
  components: { DoughnutChart },
  data() {
    return {
      chartdata: {
        // Nom des gares
        labels: [],
        // Valeurs des objets trouvés et rendus
        datasets: [
          {
            data: [],
            backgroundColor: [],
            weight: 5,
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("lostDonut",["setLoaded"]),
  },
  computed: {
    ...mapGetters("lostDonut", ["getOptions","getLoaded"]),
    ...mapGetters(["getYear"]),
    setTitle() {
      let options = this.getOptions;
      options.title.text = options.title.text + this.$store.state.year;
      return options;
    },
  },
  async created() {
    const response = await axios(
      "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q="+
      "&rows=0&sort=date&facet=gc_obo_type_c"+
      "&apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a"+
      "&refine.date=" + this.getYear
    );

    response.data.facet_groups[1].facets.forEach((element) => {
      this.chartdata.labels.push(element.name);
      this.chartdata.datasets[0].data.push(element.count);
    });
    colorGradient.setMidpoint(this.chartdata.labels.length);
    colorGradient
      .getArray()
      .map((color) => hexToRgba(color))
      .forEach((element) => {
        this.chartdata.datasets[0].backgroundColor.push(element);
      });

    this.setLoaded();
  },
};
</script>

<style>
</style>
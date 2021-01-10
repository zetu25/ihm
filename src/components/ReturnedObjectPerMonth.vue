<template>
  <div class="container">
    <line-chart
      v-if="this.getLoaded"
      :chartdata="chartdata"
      :options="this.setTitle"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import LineChart from "./LineChart.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },
  data: () => {
    return {
      chartdata: {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        datasets: [
          {
            label: "Objets restitués",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
            fill: false,
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["setLoaded"]),
  },
  computed: {
    ...mapGetters("returnedPerMonth", ["getOptions"]),
    ...mapGetters(["getYear","getLoaded"]),
    setTitle() {
      let options = this.getOptions;
      options.title.text = options.title.text + this.getYear;
      return options;
    },
  },
  async created() {
    const response = await axios(
      "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution" +
        "&q=&rows=0&sort=date&facet=gc_obo_date_heure_restitution_c" +
        "&apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a" +
        "&refine.gc_obo_date_heure_restitution_c=" +
        this.getYear
    );
    response.data.facet_groups[0].facets[0].facets.forEach((element) => {
      this.chartdata.datasets[0].data.push(element.count);
    });
    
  },
};
</script>

<style>
.container {
       width: 500px;
       height:500px
}
</style>
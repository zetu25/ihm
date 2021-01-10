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
  name: "LostLineTrainStation",
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
            label: "Objets perdus",
            backgroundColor: "rgb(255, 159, 64)",
            borderColor: "rgb(255, 159, 64)",
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
    ...mapGetters("lostLineTrainStation", ["getOptions"]),
    ...mapGetters(["getYear","getLoaded"]),

    setTitle() {
      let options = this.getOptions;
      options.title.text = options.title.text + this.getYear;
      return options;
    },
  },
  async created() {
    const response = await axios(
      "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=" +
        "&rows=0&sort=date&facet=date" +
        "&apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a" +
        "&refine.date=" +
        this.getYear
    );
    response.data.facet_groups[0].facets[0].facets.forEach((element) => {
      this.chartdata.datasets[0].data.push(element.count);
    });
    
  },
};
</script>

<style>
</style>
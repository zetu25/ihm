<template>
  <v-data-table
    dense
    :headers="headers"
    :items="data"
    :items-per-page="10"
    :loading="loaded"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import axios from "axios";
export default {
  name: "ReturnedBoard",
  data() {
    return {
      loaded: true,
      year: "2020",
      headers: [
        { text: "Date", value: "date", align: "start" },
        { text: "Type d'objets", value: "gc_obo_type_c" },
        { text: "Nature d'objets", value: "gc_obo_nature_c" },
        { text: "Gare", value: "gc_obo_gare_origine_r_name", sortable: false },
      ],
      data: [],
    };
  },
  methods: {},
  async created() {
    const response = await axios(
      "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q="+
      "&rows=10000&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&facet=gc_obo_type_c&refine.date=" +
        this.year
    );
    console.log(response.data);

    response.data.records.forEach((element) => {
      let data = {};
      let item = Object.create(data);
      item.date = element.fields.date;
      item.gc_obo_type_c = element.fields.gc_obo_type_c;
      item.gc_obo_nature_c = element.fields.gc_obo_nature_c;
      item.gc_obo_gare_origine_r_name =
        element.fields.gc_obo_gare_origine_r_name;
      this.data.push(item);
    });
    this.loaded = false;
  },
};
</script>
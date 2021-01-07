import axios from 'axios';
import hexToRgba from 'hex-to-rgba';
import Gradient from "javascript-color-gradient";
import Vue from "vue";
import Vuex from "vuex";

const colorGradient = new Gradient();

const color1 = "b51743";
const color2 = "#F7A62B";
const color3 = "#EA4D94";


colorGradient.setMidpoint(20);

colorGradient.setGradient(color1, color2, color3);



Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        doughnut: {
            type: 'doughnut',
            data: {
                // Nom des gares
                labels: [],
                // Valeurs des objets trouvés et rendus
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    weight: 5
                }],
            },
            options: {
                responsive: true,
                title: {
                    text: "2020",
                    display: true
                },
            }
        },
        year: "2020",
    },
    getters: {
        get_data: state => state.doughnut
    },
    mutations: {
        changeData(state, newData) {
            state.doughnut.data.datasets[0].data = newData[0];
            state.doughnut.data.labels = newData[1];
            state.doughnut.options.title.text = this.state.year;
            colorGradient.setMidpoint(newData[0].length);
            state.doughnut.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
        }
    },
    actions: {
        changeReturnedObjectData(state) {
            console.log(colorGradient.getArray())
            let train_station_names = [];
            let returned_objects = [];
            var config = {
                method: "get",
                url:
                    "https://data.sncf.com/api/records/1.0/search/?apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a&dataset=objets-trouves-restitution&q=&rows=0&facet=gc_obo_gare_origine_r_name&facet=gc_obo_date_heure_restitution_c&refine.gc_obo_date_heure_restitution_c=" +
                    this.state.year,
                headers: {},
            };

            axios(config)
                .then(function (response) {
                    response.data.facet_groups[1].facets.forEach((element) => {
                        returned_objects.push(element.count);
                        train_station_names.push(element.name);
                    });
                    let newData = [returned_objects, train_station_names];
                    state.commit("changeData", newData);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});

export default store;
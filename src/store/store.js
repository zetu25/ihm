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
        doughnutReturnedObjects: {
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
                aspectRatio:2,
                title: {
                    text: "",
                    display: true,
                    
                },
                legend:{
                    display: false,
                    fullWidth:false,
                    boxWidth:100,
                    position: "bottom"
                },
                maintainAspectRatio:true
            }
        },
        doughnutLostObjects: {
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
                    text: "",
                    display: true
                },
                legend:{
                    display: false,
                    position: "right",
                    fullWidth:false,
                    boxWidth:5
                },
                maintainAspectRatio:true
            }
        },
        year: "2020",
    },
    getters: {
        getReturnedObjectData: state => state.doughnutReturnedObjects,
        getLostObjectData: state => state.doughnutLostObjects,
    },
    mutations: {
        changeReturnedObjectData(state, newData) {
            state.doughnutReturnedObjects.data.datasets[0].data = newData[0];
            state.doughnutReturnedObjects.data.labels = newData[1];
            state.doughnutReturnedObjects.options.title.text = "Objets trouvés et restitués selon la gare en "+ this.state.year;
            console.log("This is text :" + state.doughnutReturnedObjects.options.title.text);
            colorGradient.setMidpoint(newData[0].length);
            state.doughnutReturnedObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
        },
        changeLostObjectData(state, newData) {
            state.doughnutLostObjects.data.datasets[0].data = newData[0];
            state.doughnutLostObjects.data.labels = newData[1];
            state.doughnutLostObjects.options.title.text = "Objets perdus selon la gare en "+ this.state.year;
            console.log("This is text :" + state.doughnutLostObjects.options.title.text);
            colorGradient.setMidpoint(newData[0].length);
            state.doughnutLostObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
        }
    },
    actions: {
        async changeReturnedObjectData({commit}) {
            let train_station_names = [];
            let returned_objects = [];
            var newData = {}
            var config = {
                method: "get",
                url:
                    "https://data.sncf.com/api/records/1.0/search/?apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a&dataset=objets-trouves-restitution&q=&rows=0&facet=gc_obo_gare_origine_r_name&facet=gc_obo_date_heure_restitution_c&refine.gc_obo_date_heure_restitution_c=" +
                    this.state.year
            };

            await axios(config)
                .then(function (response) {
                    response.data.facet_groups[1].facets.forEach((element) => {
                        returned_objects.push(element.count);
                        train_station_names.push(element.name);
                    });
                    newData = [returned_objects, train_station_names];
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
            commit("changeReturnedObjectData", newData)
            
        },
        async changeLostObjectData({ commit }) {
            let train_station_names = [];
            let lost_objects = [];
            var config = {
                method: "get",
                url:
                    "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&rows=1&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&apikey=2463d285a96d2c6c1739896874dbfec0b643d9ad37b51a5feda5b90a&refine.date=" +
                    this.state.year
            };

            await axios(config)
                .then(function (response) {
                    response.data.facet_groups[1].facets.forEach((element) => {
                        lost_objects.push(element.count);
                        train_station_names.push(element.name);
                    });
                    let newData = [lost_objects, train_station_names];
                    commit("changeLostObjectData", newData);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});

export default store;
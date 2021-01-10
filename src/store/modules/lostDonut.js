import axios from 'axios';
import hexToRgba from 'hex-to-rgba';
import colorGradient from "../colors";

const state = () => ({
    loaded: false,
    doughnutLostObjects: {
        type: 'doughnut',
        defaultFontColor: "#FFFFFF",
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
                text: "Objets perdus en ",
                display: true
            },
            legend: {
                display: false,
                position: "bottom",
                boxWidth: 5,
            },
            maintainAspectRatio: true
        }
    }
})

// getters
const getters = {
    getLostObjectData: state => state.doughnutLostObjects.data,
    getOptions: state => state.doughnutLostObjects.options,
    getLoaded: state => state.loaded
}


// actions
const actions = {
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
    },
    setLoaded({ commit }) {
        commit("setLoaded", true);
    }
}

// mutations
const mutations = {
    changeLostObjectData(state, newData) {
        state.doughnutLostObjects.data.datasets[0].data = newData[0];
        state.doughnutLostObjects.data.labels = newData[1];
        state.doughnutLostObjects.options.title.text = "Objets perdus selon la gare en " + this.state.year;
        colorGradient.setMidpoint(newData[0].length);
        state.doughnutLostObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
    },
    setLoaded(state, loaded) {
        state.loaded = loaded;
    }
}

const lostDonut = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default lostDonut;
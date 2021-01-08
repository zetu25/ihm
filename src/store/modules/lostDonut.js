import axios from 'axios';
//import hexToRgba from 'hex-to-rgba'; // COMMENTED TO USE RGB COLORS
// import colorGradient from "../colors";

const state = () => ({
    doughnutLostObjects: {
        type: 'doughnut',
        data: {
            // Nom des gares
            labels: [],
            // Valeurs des objets trouvés et rendus
            datasets: [{
                data: [14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
                weight: 2
            }],
        },
        options: {
            responsive: true,
            title: {
                text: "Déclarations de pertes en 2020 ",
                display: true
            },
            legend: {
                display: false,
                position: "bottom",
                boxWidth: 5
            },
            maintainAspectRatio: true
        }
    }
})

// getters
const getters = { getLostObjectData: state => state.doughnutLostObjects }

// actions
const actions = {
    async changeLostObjectData({ commit }) {
        let train_station_names = [];
        let lost_objects = [];
        var config = {
            method: "get",
            url:
                "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&facet=gc_obo_gare_origine_r_name&refine.date=" +
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

// mutations
const mutations = {
    changeLostObjectData(state, newData) {
        state.doughnutLostObjects.data.datasets[0].data = newData[0];
        state.doughnutLostObjects.data.labels = newData[1];
        state.doughnutLostObjects.options.title.text = "Objets perdus selon la gare en " + this.state.year;
        // COMMENTED TO USE COLORS
        //colorGradient.setMidpoint(newData[0].length);
        //state.doughnutLostObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
    
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
import axios from 'axios';
//import hexToRgba from 'hex-to-rgba';
//import colorGradient from "../colors";

const state = () => ({
    doughnutReturnedObjects: {
        type: 'doughnut',
        data: {
            // Nom des gares
            labels: [],
            // Valeurs des objets trouvés et rendus
            datasets: [{
                data: [14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
                weight: 5
            }],
        },
        options: {
            responsive: true,
            aspectRatio: 2,
            title: {
                text: "Objets restitués en 2020",
                display: true,

            },
            legend: {
                display: false,
                boxWidth: 10,
                position: "right"
            },
            maintainAspectRatio: true
        }
    },
})

// getters
const getters = { getReturnedObjectData: state => state.doughnutReturnedObjects}

// actions
const actions = {
    async changeReturnedObjectData({ commit }) {
        let train_station_names = [];
        let returned_objects = [];
        var newData = {}
        var config = {
            method: "get",
            url:
                "https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&sort=date&facet=date&facet=gc_obo_gare_origine_r_name&refine.date=" +
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

    }
}

// mutations
const mutations = {
    changeReturnedObjectData(state, newData) {
        state.doughnutReturnedObjects.data.datasets[0].data = newData[0];
        state.doughnutReturnedObjects.data.labels = newData[1];
        state.doughnutReturnedObjects.options.title.text = "Objets trouvés et restitués selon la gare en " + this.state.year;
        //colorGradient.setMidpoint(newData[0].length);
        //state.doughnutReturnedObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
    }
}

const returnedObject = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default returnedObject;
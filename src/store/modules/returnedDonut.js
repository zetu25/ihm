import axios from 'axios';
// import hexToRgba from 'hex-to-rgba';
// import colorGradient from "../colors";



const state = () => ({
    loaded: false,
    doughnutReturnedObjects: {
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
            aspectRatio: 2,
            title: {
                text: "Objets trouvés et restitués selon la gare en ",
                display: true,

            },
            legend: {
                display: false,
                boxWidth: 100,
                position: "bottom"
            },
            maintainAspectRatio: true
        }
    },
})

// getters
const getters = {
    getReturnedObjectData: state => state.doughnutReturnedObjects.data,
    getOptions: state => state.doughnutReturnedObjects.options,
    getLoaded: state => state.loaded
}

// actions
const actions = {
    async changeReturnedObjectData({ commit }) {
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
}

// mutations
const mutations = {
    // changeReturnedObjectData(state, newData) {
    //     state.doughnutReturnedObjects.data.datasets[0].data = newData[0];
    //     state.doughnutReturnedObjects.data.labels = newData[1];
    //     state.doughnutReturnedObjects.options.title.text = "Objets trouvés et restitués selon la gare en " + this.state.year;
    //     colorGradient.setMidpoint(newData[0].length);
    //     state.doughnutReturnedObjects.data.datasets[0].backgroundColor = colorGradient.getArray().map(color => hexToRgba(color));
    // },

}

const returnedObject = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default returnedObject;
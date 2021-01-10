const state = () => ({
    loaded: false,
    lostBar: {
        options: {
            responsive: true,
            title: {
                text: "Objets perdus en ",
                display: true
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
})

const getters = {

    getOptions: state => state.lostBar.options,
    getLoaded: state => state.loaded
}

const mutations = {
    setLoaded(state, loaded) {
        state.loaded = loaded;
    }
}

const actions = {
    setLoaded({ commit }) {
        commit("setLoaded", true);
    }
}


const lostBar = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


export default lostBar;
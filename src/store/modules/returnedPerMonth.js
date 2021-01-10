const state = () => ({
    loaded: false,
    lineReturnedPerMonth: {
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Objets restitués par mois en ',
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Mois'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Objets restitué'
                    }
                }]
            }
        }
    }
})

const getters = {
    
    getOptions: state => state.lineReturnedPerMonth.options,
    getLoaded: state => state.loaded
}

const mutations = {
    
    setLoaded(state, loaded) {
        state.loaded = loaded;
    }
}

const actions = {
    
    setLoaded({commit}){
        commit("setLoaded", true);
    }

}


const returnedPerMonth = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


export default returnedPerMonth;
const state = () => ({
    loaded: false,
    lineLostPerMonth: {
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Objets perdus par mois en ',
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
                        labelString: 'Objets perdus'
                    }
                }]
            }
        }
    }
})

const getters = {

    getOptions: state => state.lineLostPerMonth.options,
    getLoaded: state => state.loaded
}

const mutations = {

}

const actions = {

}


const lostPerMonth = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


export default lostPerMonth;
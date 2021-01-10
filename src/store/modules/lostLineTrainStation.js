const state = () => ({
    loaded: false,
    lineLostPerMonth: {
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Objets perdus par gares en ',
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Gares'
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


const lostLineTrainStation = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


export default lostLineTrainStation;
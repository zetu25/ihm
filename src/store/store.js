import Vue from 'vue'
import Vuex from 'vuex'
import returnedDonut from './modules/returnedDonut.js'
import lostDonut from './modules/lostDonut.js'
import returnedPerMonth from './modules/returnedPerMonth.js'
import lostPerMonth from './modules/lostPerMonth.js'
import lostLineTrainStation from './modules/lostLineTrainStation.js'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        returnedDonut,
        returnedPerMonth,
        lostDonut,
        lostPerMonth,
        lostLineTrainStation
    },
    state: {
        year: "2020",
        loaded: false,
    },
    getters: {
        getYear : state => state.year,
        getLoaded : state => state.loaded
    },
    mutations: {
        setLoaded(state, loaded) {
            state.loaded = loaded;
        }
    },
    actions:{
        setLoaded({ commit }) {
            commit("setLoaded", true);
        }
    }
})
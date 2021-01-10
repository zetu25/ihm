import Vue from 'vue';
import Vuex from 'vuex';
import returnedDonut from './modules/returnedDonut.js';
import lostDonut from './modules/lostDonut.js';
import returnedPerMonth from './modules/returnedPerMonth.js';
import lostPerMonth from './modules/lostPerMonth.js';
import lostBar from './modules/lostBar.js';
import returnedBar from './modules/returnedBar.js';



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        returnedDonut,
        returnedPerMonth,
        lostDonut,
        lostPerMonth,
        lostBar,
        returnedBar
    },
    state: {
        year: "2020",
    },
    getters: {
        getYear: state => state.year,
    }

})
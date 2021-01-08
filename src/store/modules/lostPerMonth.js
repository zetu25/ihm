import planetChartData from "../chart-data";

const lostPerMonth = {
    namespaced: true,
    state: () => ({
        lineLostPerMonth: planetChartData
    }),
    mutations: {

    },
    actions: {

    },
    getters: {
        getLostObjectData: state => state.lineLostPerMonth
    }
}

export default lostPerMonth;

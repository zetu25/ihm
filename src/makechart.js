import Chart from "chart.js";


export default function createChart(chartId, chartData) {
    let ctx = document.getElementById(chartId).getContext("2d");
    // /* eslint-disable no-unused-vars */
    let myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
    });
    return myChart;
    // /* eslint-enable no-unused-vars */
}
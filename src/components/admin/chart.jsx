import React from 'react';
import styles from "./admin.module.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

export const options = {


    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
    },
    legend: {
        display: false
    }
};

const labels = ['January','February','March','April','May','June','July','August','September','October','November','December'];


export const data = {
    labels,
    datasets: [{
        data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034,
            18483,
            24003,
            23489,
            25352,
            26666,
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
    }],
};


const Chart=()=>{
    return(

         <div className={`${styles.chart} my-3` } >
             <div className={`mb-2`}>Last 6 Months(Revenue)</div>
             <Line options={options} data={data}  />
        </div>

    )
}
export default Chart
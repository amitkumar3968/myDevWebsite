import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import Chart from 'chart.js'


import { Doughnut } from 'react-chartjs-2';

class Services extends Component {


    render() {
        return (
            <Doughnut data={data} />
        )
    }

};

const data = {
    labels: [
        'iOS',
        'React Native',
        'Angular',
        'SQL',
        'C#'
    ],
    datasets: [{
        data: [5, 3, 2, 1, 1],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#c9def7',
            '#37f0ed'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#c9def7',
            '#37f0ed'
        ]
    }]
};
export default Services
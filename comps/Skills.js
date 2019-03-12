import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import Chart from 'chart.js'


import { Doughnut } from 'react-chartjs-2';

class Skills extends Component {
    render() {
        return (
            <Pane width='100vw' height='100vh' padding={80}>
                <Doughnut data={data}  />
            </Pane>
        )
    }
};

const data = {
    labels: [
        'iOS',
        'React Native',
        'ReactJS',
        'SQL',
        'C#',
        'NodeJS',
        'MongoDB',
        'Express'
    ],
    datasets: [{
        data: [5, 3, 2,2, 2, 1,1,1],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#c9def7',
            '#37f0ed',
            '#f6f8d9',
            '#e5c9f8',
            '#fbc3e7'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#c9def7',
            '#37f0ed',
            '#f6f8d9',
            '#e5c9f8',
            '#fbc3e7'
        ]
    }]
};
export default Skills
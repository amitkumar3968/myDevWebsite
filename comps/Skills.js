import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

import ReactGA from 'react-ga';

import { Doughnut } from 'react-chartjs-2';

class Skills extends Component {

    constructor(props) {
        super(props);
    }
   
    componentDidMount() {

        ReactGA.pageview('/Skills');

    }

    render() {
        return (
            <Pane width='100vw' height='100vh' padding={80}>
                <Doughnut data={this.props.data.Skills} />
            </Pane>
        )
    }
};


export default Skills
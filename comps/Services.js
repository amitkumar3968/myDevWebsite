import React, { Component } from 'react'
import { Pane, Button, Text, Heading, Label, ListItem } from 'evergreen-ui'


class Services extends Component {


    render() {
        return (
            <Pane width='100vw' height='100vh' padding={100} >
                <Label fontSize={20} color='#789ff3'> Things - which i works for </Label>
                <Pane margin={40}>
                    {Array.isArray(this.props.data.Services) &&
                        this.props.data.Services.map((value, index) => {
                            return (
                                <ListItem key={index}>{value}</ListItem>
                            )
                        })
                    }
                </Pane>
                <Label fontSize={14} color='#789ff3'> More to go... </Label>

            </Pane>
        )
    }

};


export default Services
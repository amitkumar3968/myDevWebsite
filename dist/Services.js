import React, { Component } from 'react';
import { Pane, Button, Text, Heading, Label, ListItem } from 'evergreen-ui';

class Services extends Component {
  render() {
    return React.createElement(Pane, {
      width: "100vw",
      height: "100vh",
      padding: 100
    }, React.createElement(Label, {
      fontSize: 20,
      color: "#789ff3"
    }, " Things - which i works for "), React.createElement(Pane, {
      margin: 40
    }, Array.isArray(this.props.data.Services) && this.props.data.Services.map((value, index) => {
      return React.createElement(ListItem, {
        key: index
      }, value);
    })), React.createElement(Label, {
      fontSize: 14,
      color: "#789ff3"
    }, " More to go... "));
  }

}

;
export default Services;
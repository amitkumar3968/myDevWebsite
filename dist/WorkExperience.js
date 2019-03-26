import React, { Component } from 'react';
import { Pane, Button, Text, Heading, Label, Li } from 'evergreen-ui';
import { ListItem } from 'evergreen-ui/commonjs/typography';

var moment = require('moment'); // import { List } from 'semantic-ui-react'


import ReactGA from 'react-ga';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ReactGA.pageview('/Skills');
  }

  gettimeDuration(startingdate) {
    // assuming startingdate is of format -- dd/MM/YYYY
    // alert(startingdate);
    // console.log(typeof (startingdate));
    var parts = startingdate.split('/'); // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.

    var mydate = new Date(parts[2], parts[1] - 1, parts[0]); // console.log(mydate.getTime());

    var currentDate = new Date(); // console.log(currentDate.getTime());
    // console.log(moment.duration(currentDate - mydate).years()); // This should returns 5
    // console.log(moment.duration(currentDate - mydate).months());

    var totalExp = moment.duration(currentDate - mydate).years().toString() + '.' + moment.duration(currentDate - mydate).months().toString() + ' Yrs';
    return totalExp;
  }

  render() {
    return React.createElement(Pane, {
      width: "100vw",
      height: "120vh",
      padding: 80
    }, React.createElement(Pane, null, React.createElement(Label, {
      color: "#789ff3"
    }, "Total Work Experience - ", this.gettimeDuration(this.props.data.WorkExperience.firstJobStartingdate), " "), React.createElement(Pane, null, React.createElement(Text, null, "Summary ->  iOS - 6+ yrs , ReactNative - 1+ yrs, ReactJS - 1+ yrs "))), React.createElement(Pane, {
      margin: 20
    }, React.createElement(Label, null, " \uD83D\uDCBC Current Company  -- ", this.props.data.WorkExperience.currentCompanydetails.companyname, " "), React.createElement(Pane, null, React.createElement(ListItem, null, "Position- ", this.props.data.WorkExperience.currentCompanydetails.Position), React.createElement(ListItem, null, "Time Served - ", this.props.data.WorkExperience.currentCompanydetails.JoiningYear), React.createElement(ListItem, null, "Responsibilites-")), React.createElement(Pane, {
      marginLeft: 40
    }, Array.isArray(this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty.map((value, index) => {
      return React.createElement(ListItem, {
        key: index
      }, value);
    }))), React.createElement(Pane, {
      margin: 20
    }, React.createElement(Label, null, " \uD83D\uDCBC Last Company  -- ", this.props.data.WorkExperience.secondCompanydetails.companyname, " "), React.createElement(Pane, null, React.createElement(ListItem, null, "Position- ", this.props.data.WorkExperience.secondCompanydetails.Position), React.createElement(ListItem, null, "Time Served- ", this.props.data.WorkExperience.secondCompanydetails.JoiningYear), React.createElement(ListItem, null, "Responsibilites-")), React.createElement(Pane, {
      marginLeft: 40
    }, Array.isArray(this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty.map((value, index) => {
      return React.createElement(ListItem, {
        key: index
      }, value);
    }))), React.createElement(Pane, {
      margin: 20
    }, React.createElement(Label, null, " \uD83D\uDCBC First Company  -- ", this.props.data.WorkExperience.firstCompanydetails.companyname, " "), React.createElement(Pane, null, React.createElement(ListItem, null, "Position- ", this.props.data.WorkExperience.firstCompanydetails.Position), React.createElement(ListItem, null, "Time Served- ", this.props.data.WorkExperience.firstCompanydetails.JoiningYear), React.createElement(ListItem, null, "Responsibilites-")), React.createElement(Pane, {
      marginLeft: 40
    }, Array.isArray(this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty.map((value, index) => {
      return React.createElement(ListItem, {
        key: index
      }, value);
    }))));
  }

}

export default WorkExperience;
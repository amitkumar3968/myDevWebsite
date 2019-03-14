import React, { Component } from 'react'
import { Pane, Button, Text, Heading, Label, Li } from 'evergreen-ui'
import { ListItem } from 'evergreen-ui/commonjs/typography';
var moment = require('moment');
// import { List } from 'semantic-ui-react'

class WorkExperience extends Component {
    constructor(props) {
        super();
    }

    gettimeDuration(startingdate) {

        // assuming startingdate is of format -- dd/MM/YYYY
        // alert(startingdate);
        // console.log(typeof (startingdate));
        var parts = startingdate.split('/');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
        // console.log(mydate.getTime());
        var currentDate = new Date();
        // console.log(currentDate.getTime());

        // console.log(moment.duration(currentDate - mydate).years()); // This should returns 5
        // console.log(moment.duration(currentDate - mydate).months());

        var totalExp = moment.duration(currentDate - mydate).years().toString() + '.' +
            moment.duration(currentDate - mydate).months().toString() + ' Yrs';


        return totalExp;
    }

    render() {
        return (
            <Pane width='100vw' height='120vh' padding={80}>
                <Pane>
                    <Label>Total Work Experience - {this.gettimeDuration(this.props.data.WorkExperience.firstJobStartingdate)} </Label>
                    <Pane>
                        <Text>Summary ->  iOS - 6+ yrs , ReactNative - 1+ yrs, ReactJS - 1+ yrs </Text>
                    </Pane>

                </Pane>
                {/* // Company listings. */}
                <Pane margin={20}>
                    <Label> 💼 Current Company  -- {this.props.data.WorkExperience.currentCompanydetails.companyname} </Label>

                    <Pane>
                        <ListItem>Position- {this.props.data.WorkExperience.currentCompanydetails.Position}</ListItem>

                        <ListItem>Time Served - {this.props.data.WorkExperience.currentCompanydetails.JoiningYear}</ListItem>

                        <ListItem>Responsibilites-</ListItem>
                    </Pane>

                    <Pane marginLeft={40}>
                        {Array.isArray(this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty) &&
                            this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty.map((value,index) => {
                                return (
                                    <ListItem key={index}>{value}</ListItem>
                                )
                            })
                        }
                    </Pane>
                </Pane>

                {/* */}

                <Pane margin={20}>
                    <Label> 💼 Last Company  -- {this.props.data.WorkExperience.secondCompanydetails.companyname} </Label>

                    <Pane>
                        <ListItem>Position- {this.props.data.WorkExperience.secondCompanydetails.Position}</ListItem>

                        <ListItem>Time Served- {this.props.data.WorkExperience.secondCompanydetails.JoiningYear}</ListItem>

                        <ListItem>Responsibilites-</ListItem>
                    </Pane>

                    <Pane marginLeft={40}>
                        {Array.isArray(this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty) &&
                            this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty.map((value,index) => {
                                return (
                                    <ListItem key={index}>{value}</ListItem>
                                )
                            })
                        }
                    </Pane>
                </Pane>

                {/* */}
                <Pane margin={20}>
                    <Label> 💼 First Company  -- {this.props.data.WorkExperience.firstCompanydetails.companyname} </Label>

                    <Pane>
                        <ListItem>Position- {this.props.data.WorkExperience.firstCompanydetails.Position}</ListItem>

                        <ListItem>Time Served- {this.props.data.WorkExperience.firstCompanydetails.JoiningYear}</ListItem>

                        <ListItem>Responsibilites-</ListItem>
                    </Pane>

                    <Pane marginLeft={40}>
                        {Array.isArray(this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty) &&
                            this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty.map((value,index) => {
                                return (
                                    <ListItem key={index}>{value}</ListItem>
                                )
                            })
                        }
                    </Pane>
                </Pane>

            </Pane>

        )
    }
}

export default WorkExperience;
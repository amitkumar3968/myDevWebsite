import React, { Component } from 'react'
import { Pane, Button, Text, Heading, Label, Li } from 'evergreen-ui'
import { ListItem } from 'evergreen-ui/commonjs/typography';
var moment = require('moment');
// import { List } from 'semantic-ui-react'
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
            <Pane width='100vw' height='100vh' paddingTop={100}
            >
                <Pane flex={1} alignItems='center' display="flex">
                    <Label color='#789ff3'>Total Work Experience - {this.gettimeDuration(this.props.data.WorkExperience.firstJobStartingdate)} </Label>
                </Pane>
                <Pane>
                    <Text>Summary ->  iOS - 6+ yrs , ReactNative - 1+ yrs, ReactJS - 1+ yrs </Text>
                </Pane>
                {/* // Company listings. */}

                <Pane display="flex" justifyContent='flex-end' alignItems='flex-end' >


                    <Pane margin={10} alignself='center'>
                        <Label> 💼 Current Company</Label>

                        <Pane>
                            <Text>
                                <u> {this.props.data.WorkExperience.currentCompanydetails.companyname}</u>
                            </Text>
                        </Pane>

                        <Pane>
                            <ListItem>Position- {this.props.data.WorkExperience.currentCompanydetails.Position}</ListItem>

                            <ListItem>Time Served - {this.props.data.WorkExperience.currentCompanydetails.JoiningYear}</ListItem>

                            <ListItem>Responsibilites-</ListItem>
                        </Pane>

                        <Pane marginLeft={20}>
                            {Array.isArray(this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty) &&
                                this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty.map((value, index) => {
                                    return (
                                        <ListItem key={index}>{value}</ListItem>
                                    )
                                })
                            }
                        </Pane>
                    </Pane>

                    {/* */}

                    <Pane margin={10}  >
                        <Label> 💼 Last Company </Label>
                        <Pane>
                            <Text>
                                <u>{this.props.data.WorkExperience.secondCompanydetails.companyname} </u>
                            </Text>
                        </Pane>

                        <Pane>
                            <ListItem>Position- {this.props.data.WorkExperience.secondCompanydetails.Position}</ListItem>

                            <ListItem>Time Served- {this.props.data.WorkExperience.secondCompanydetails.JoiningYear}</ListItem>

                            <ListItem>Responsibilites-</ListItem>
                        </Pane>

                        <Pane marginLeft={20}>
                            {Array.isArray(this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty) &&
                                this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty.map((value, index) => {
                                    return (
                                        <ListItem key={index}>{value}</ListItem>
                                    )
                                })
                            }
                        </Pane>
                    </Pane>

                    {/* */}
                    <Pane margin={10}  >
                        <Label> 💼 First Company</Label>
                        <Pane>
                            <Text>
                                <u>  {this.props.data.WorkExperience.firstCompanydetails.companyname} </u>
                            </Text>
                        </Pane>
                        <Pane>
                            <ListItem>Position- {this.props.data.WorkExperience.firstCompanydetails.Position}</ListItem>

                            <ListItem>Time Served- {this.props.data.WorkExperience.firstCompanydetails.JoiningYear}</ListItem>

                            <ListItem>Responsibilites-</ListItem>
                        </Pane>

                        <Pane marginLeft={20}>
                            {Array.isArray(this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty) &&
                                this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty.map((value, index) => {
                                    return (
                                        <ListItem key={index}>{value}</ListItem>
                                    )
                                })
                            }
                        </Pane>
                    </Pane>


                </Pane>
            </Pane>

        )
    }
}

export default WorkExperience;
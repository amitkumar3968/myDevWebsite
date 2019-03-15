import React, { Component } from 'react'
import { Pane, Button, Text, Heading, Dialog, Paragraph,code } from 'evergreen-ui'
import Link from 'next/link'

import ReactGA from 'react-ga';

class Contact extends Component {
    constructor(props) {
        super(props);
        // this.openlink = this.openlink.bind(this);
        this.state = {
            isShown: false
        };
    }
    openlink(param) {
        // window.open('http://google.com','_blank');
        switch (param) {
            case 1: {
                //window.alert('message');
                //alert(this.props.data.Contact.github);
                ReactGA.event({
                    category: 'github',
                    action: 'User Open github homepage'
                });
                window.open(this.props.data.Contact.github, '_blank');
                //console.log(this.props.data.Contact.github);
            }
                break;

            case 2: {
                ReactGA.event({
                    category: 'linkedin',
                    action: 'User Open linkedin'
                });
                window.open(this.props.data.Contact.linkedin, '_blank');
            }
                break;

            case 3: {
                ReactGA.event({
                    category: 'mailid',
                    action: 'User Open mailid'
                });
                window.open(this.props.data.Contact.mailid, '_blank');
            }
                break;
            case 4: {
                ReactGA.event({
                    category: 'code',
                    action: 'User Open github code site'
                });
                window.open(this.props.data.Contact.code, '_blank');
            }
                break;
            case 5: {
                ReactGA.event({
                    category: 'CV',
                    action: 'User dwld CV'
                });
                window.open(this.props.data.Contact.cvdwld, '_blank');
            }
                break;


            default: {

            }

        }
    }

    componentDidMount() {

        ReactGA.pageview('/Skills');

    }
    sendtogithubissue() {
        this.setState({ isShown: false })
        //console.log('sendtogithubissue');
        ReactGA.event({
            category: 'Feedback',
            action: 'User Gone to feedback github site'
        });
        window.open(this.props.data.Contact.githubissue, '_blank');
    }

    render() {
        return (
            <Pane width='100vw' height='100vh' padding={80}  >

                <Pane background="tint2" height={60} width='90vw' flex={1} display='flex' justifyContent='flex-end'
                    alignItems='center' borderRadius={10} >
                    <Pane flex={1} display='flex' justifyContent='flex-start'>
                        <Text>{this.props.data.Contact.title}</Text>
                    </Pane>

                    <Pane >

                        <Button appearance="minimal" margin={5} onClick={() => { this.openlink(1) }}>GitHub</Button>


                        <Button appearance="minimal" margin={5} onClick={() => { this.openlink(2) }}>LinkedIn</Button>



                        <Button appearance="minimal" margin={5} onClick={() => { this.openlink(3) }}>Mail</Button>

                        <Button appearance="minimal" margin={5} onClick={() => { this.openlink(4) }}>Code</Button>
                        <Button appearance="minimal" margin={5} onClick={() => { this.openlink(5) }}>Dwld CV</Button>

                        {/* <Link href='https://github.com/amitkumar3968/myDevWebsite' >
                            <a>Code</a>
                        </Link> */}
                    </Pane>
                </Pane>

                <Pane flex={1} display='flex' justifyContent='center'>
                    <Dialog
                        isShown={this.state.isShown}
                        title="Submit Feedback"
                        onCloseComplete={() =>  this.setState({ isShown: false })}
                        onConfirm={() => {this.sendtogithubissue()}}
                    >
                        <Pane>
                            <Paragraph>{this.props.data.Contact.feedbacktitle} 
                            <Text> <code>{this.props.data.Contact.githubissue}</code></Text>
                            </Paragraph>
                            

                        </Pane>

                        {/* {({ close }) => (
                            <Pane>
                                <Paragraph>Manage your own buttons and close interaction</Paragraph>
                                <Button marginTop={16} onClick={close}>
                                    Self Managed Close
                                 </Button>
                            </Pane>
                        )} */}
                    </Dialog>

                    <Button onClick={() => this.setState({ isShown: true })} marginTop={20} intent="success">FeedBack</Button>
                </Pane>


                {/* <Text>
                    <Link href='https://github.com/amitkumar3968/myDevWebsite' >
                        <a >
                            Need the Source Code
                 </a>
                    </Link>
                </Text> */}
            </Pane>

        )
    }
}

export default Contact;
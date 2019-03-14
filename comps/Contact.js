import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import Link from 'next/link'


class Contact extends Component {
    constructor(props) {
        super();
        // this.openlink = this.openlink.bind(this);
    }
    openlink(param) {
        // window.open('http://google.com','_blank');
        switch (param) {
            case 1: {
                //window.alert('message');
                //alert(this.props.data.Contact.github);
                window.open(this.props.data.Contact.github, '_blank');
                //console.log(this.props.data.Contact.github);
            }
                break;

            case 2: {
                window.open(this.props.data.Contact.linkedin, '_blank');
            }
                break;

            case 3: {
                window.open(this.props.data.Contact.mailid, '_blank');
            }
                break;
            case 4: {
                window.open(this.props.data.Contact.code, '_blank');
            }
                break;
            case 5: {
                window.open(this.props.data.Contact.cvdwld, '_blank');
            }
                break;


            default: {

            }

        }
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
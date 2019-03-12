import React,{Component} from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

class Contact extends Component{

    render (){
        return(
            <Pane width='100vw' height='100vh' padding={80}>
             <Text>Email id - </Text>
             <Text>Phone No - </Text>
        </Pane>

        )
    }
}

export default Contact;
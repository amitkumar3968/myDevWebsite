import React,{Component} from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import Link from 'next/link'

class Contact extends Component{

    render (){
        return(
            <Pane width='100vw' height='100vh' padding={80}>
             <Text>Email id - </Text>
             <Text>Phone No - </Text>
             <Text> 
                 <Link href='https://github.com/amitkumar3968/myDevWebsite'> Get the Website Code</Link>
             </Text>
        </Pane>

        )
    }
}

export default Contact;

// import Header from '../comps/Header'
// import Layout from '../comps/Layout'

// export default () => (
//   <div>
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   </div>
// )


import React, { Component } from 'react'
import Link from 'next/link'
import Header from './Header'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import Plx from 'react-plx';

class About extends Component {
  render() {
    return (
      <Pane>
        
       
        <Pane display="flex" justifyContent='center' flex={1} alignItems='center' width='100%' height={500} backgroundColor='white'>
         
          {/* <img flex={1} src={require('../header-background.jpg')} width='100%' style={{ position: 'relative' }} />
          <h2 flex={1} style={{ position: 'absolute', bottom: '45%', left:'45%', width: '200'  }}><span>Some Text</span></h2> */}
       
        
        </Pane>
      </Pane>




    )
  }
}
export default About;
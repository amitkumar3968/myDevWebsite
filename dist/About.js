// import Header from '../comps/Header'
// import Layout from '../comps/Layout'
// export default () => (
//   <div>
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   </div>
// )
import React, { Component } from 'react';
import Link from 'next/link';
import Header from './Header';
import { Pane, Button, Text, Heading } from 'evergreen-ui';
import Plx from 'react-plx';

class About extends Component {
  render() {
    return React.createElement(Pane, null, React.createElement(Pane, {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      width: "100%",
      height: 500,
      backgroundColor: "white"
    }));
  }

}

export default About;
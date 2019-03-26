
import React, { Component } from 'react'
import Link from 'next/link'
import Header from '../comps/Header'
import { Pane, Button, Text, Heading, Card, Label } from 'evergreen-ui'
import Plx from 'react-plx';
import Router from 'next/router'

import ReactGA from 'react-ga';

const parallaxData = [
  {
    start: 0,
    end: 700,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

class Home extends Component {

  constructor(props) {
    // alert(props);
    super(props);
  }
  componentDidMount() {
    // super.componentDidMount();
    // alert(userdata.Home.title);
    ReactGA.initialize('UA-136327063-1');
    ReactGA.pageview('/Home');

  }
  render() {
    return (

      <Pane>
        <Pane display="flex" padding={5} background="white" borderRadius={3}
          flex={1} justifyContent='flex-end'
          elevation={4}
          position='fixed' width='98%' zIndex={9999}
        >
          <Pane flex={1} alignItems='center' display="flex"  >
            {/* <Heading marginLeft={20} size={500}>Amit Kumar</Heading> */}
            {/* <Text>{userdata.Home.UserName}</Text> */}
            <Text fontSize={18} marginLeft={20}>{this.props.data.Home.UserName}</Text>
          </Pane>
          <Pane justifyContent='flex-end' alignItems='flex-end' opacity={1}>
            {/* Below you can see the marginRight property on a Button. */}
            <Link href="#Home">
              <Button appearance="minimal" margin={5}>🏠Home</Button>
            </Link>
            <Link href="#Skills">
              <Button appearance="minimal" margin={5}>Skills</Button>
            </Link>

            <Link href="#WorkExperience">
              <Button appearance="minimal" margin={5}>WorkExperience</Button>
            </Link>
            <Link href="#Services">
              <Button appearance="minimal" margin={5}>Services</Button>
            </Link>



            <Link href="#Contact">
              <Button appearance="minimal" margin={5}>Contact</Button>
            </Link>




            {/* <li><a className="smoothscroll" href="/About">About</a></li> */}
            {/* <Button appearance="primary">Primary Button</Button> */}
          </Pane>
        </Pane>
        <Pane display="flex" justifyContent='center' flex={1}
          alignItems='center' width='100vw' height='100vh'>

          {/* calc(100vh - 40px) */}

          {/* <Plx
            className='MyAwesomeParallax'
            parallaxData={parallaxData}
          >
            <img flex={1} src={require('../header-background.jpg')} width='100%' style={{ position: 'relative' }} />
            <h2 flex={1} style={{ position: 'absolute', bottom: '45%', left: '45%', width: '200' }}><span>Some Text</span></h2>
          </Plx> */}
          {/* <Text>Mobile Developer(iOS) + MERN💨</Text> */}
          <Pane>
            <Pane display="flex" justifyContent='center' flex={1} padding={20}>
              <Text fontSize={24}>{this.props.data.Home.title}</Text>
            </Pane>
            <Pane display="flex" justifyContent='center' flex={1} padding={20}>
              <Label fontSize={20}>{this.props.data.Home.Subtitle}</Label>
            </Pane>
          </Pane>



        </Pane>
      </Pane>




    )
  }
}
// function onClickHandler (href) {
//   return e => {
//     alert(href);
//      e.preventDefault()
//      Router.push(href)
//   }
// }

// const Link = ({ children, href }) => (
//   <a href={href} onClick={onClickHandler(href)}>
//     {children}
//     <style jsx>{`
//       a {
//         margin-right: 10px;
//       }
//     `}</style>
//   </a>
// )
export default Home;
import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../comps/Header';
import { Pane, Button, Text, Heading, Card, Label } from 'evergreen-ui';
import Plx from 'react-plx';
import Router from 'next/router';
import ReactGA from 'react-ga';
const parallaxData = [{
  start: 0,
  end: 700,
  properties: [{
    startValue: 1,
    endValue: 0,
    property: 'opacity'
  }]
}];

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
    return React.createElement(Pane, null, React.createElement(Pane, {
      display: "flex",
      padding: 5,
      background: "white",
      borderRadius: 3,
      flex: 1,
      justifyContent: "flex-end",
      elevation: 4,
      position: "fixed",
      width: "98%",
      zIndex: 9999
    }, React.createElement(Pane, {
      flex: 1,
      alignItems: "center",
      display: "flex"
    }, React.createElement(Text, {
      fontSize: 18,
      marginLeft: 20
    }, this.props.data.Home.UserName)), React.createElement(Pane, {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      opacity: 1
    }, React.createElement(Link, {
      href: "#Home"
    }, React.createElement(Button, {
      appearance: "minimal",
      margin: 5
    }, "\uD83C\uDFE0Home")), React.createElement(Link, {
      href: "#Skills"
    }, React.createElement(Button, {
      appearance: "minimal",
      margin: 5
    }, "Skills")), React.createElement(Link, {
      href: "#WorkExperience"
    }, React.createElement(Button, {
      appearance: "minimal",
      margin: 5
    }, "WorkExperience")), React.createElement(Link, {
      href: "#Services"
    }, React.createElement(Button, {
      appearance: "minimal",
      margin: 5
    }, "Services")), React.createElement(Link, {
      href: "#Contact"
    }, React.createElement(Button, {
      appearance: "minimal",
      margin: 5
    }, "Contact")))), React.createElement(Pane, {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }, React.createElement(Pane, null, React.createElement(Pane, {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      padding: 20
    }, React.createElement(Text, {
      fontSize: 24
    }, this.props.data.Home.title)), React.createElement(Pane, {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      padding: 20
    }, React.createElement(Label, {
      fontSize: 20
    }, this.props.data.Home.Subtitle)))));
  }

} // function onClickHandler (href) {
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
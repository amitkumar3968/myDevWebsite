import React, { Component } from 'react';
import { Pane, Button, Text, Heading, Dialog, Paragraph, code } from 'evergreen-ui';
import Link from 'next/link';
import ReactGA from 'react-ga';

class Contact extends Component {
  constructor(props) {
    super(props); // this.openlink = this.openlink.bind(this);

    this.state = {
      isShown: false
    };
  }

  openlink(param) {
    // window.open('http://google.com','_blank');
    switch (param) {
      case 1:
        {
          //window.alert('message');
          //alert(this.props.data.Contact.github);
          ReactGA.event({
            category: 'github',
            action: 'User Open github homepage'
          });
          window.open(this.props.data.Contact.github, '_blank'); //console.log(this.props.data.Contact.github);
        }
        break;

      case 2:
        {
          ReactGA.event({
            category: 'linkedin',
            action: 'User Open linkedin'
          });
          window.open(this.props.data.Contact.linkedin, '_blank');
        }
        break;

      case 3:
        {
          ReactGA.event({
            category: 'mailid',
            action: 'User Open mailid'
          });
          window.open(this.props.data.Contact.mailid, '_blank');
        }
        break;

      case 4:
        {
          ReactGA.event({
            category: 'code',
            action: 'User Open github code site'
          });
          window.open(this.props.data.Contact.code, '_blank');
        }
        break;

      case 5:
        {
          ReactGA.event({
            category: 'CV',
            action: 'User dwld CV'
          });
          window.open(this.props.data.Contact.cvdwld, '_blank');
        }
        break;

      default:
        {}
    }
  }

  componentDidMount() {
    ReactGA.pageview('/Skills');
  }

  sendtogithubissue() {
    this.setState({
      isShown: false
    }); //console.log('sendtogithubissue');

    ReactGA.event({
      category: 'Feedback',
      action: 'User Gone to feedback github site'
    });
    window.open(this.props.data.Contact.githubissue, '_blank');
  }

  render() {
    return React.createElement(Pane, {
      width: "100vw",
      height: "100vh",
      padding: 80
    }, React.createElement(Pane, {
      background: "tint2",
      height: 60,
      width: "90vw",
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      borderRadius: 10
    }, React.createElement(Pane, {
      flex: 1,
      display: "flex",
      justifyContent: "flex-start"
    }, React.createElement(Text, null, this.props.data.Contact.title)), React.createElement(Pane, null, React.createElement(Button, {
      appearance: "minimal",
      margin: 5,
      onClick: () => {
        this.openlink(1);
      }
    }, "GitHub"), React.createElement(Button, {
      appearance: "minimal",
      margin: 5,
      onClick: () => {
        this.openlink(2);
      }
    }, "LinkedIn"), React.createElement(Button, {
      appearance: "minimal",
      margin: 5,
      onClick: () => {
        this.openlink(3);
      }
    }, "Mail"), React.createElement(Button, {
      appearance: "minimal",
      margin: 5,
      onClick: () => {
        this.openlink(4);
      }
    }, "Code"), React.createElement(Button, {
      appearance: "minimal",
      margin: 5,
      onClick: () => {
        this.openlink(5);
      }
    }, "Dwld CV"))), React.createElement(Pane, {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }, React.createElement(Dialog, {
      isShown: this.state.isShown,
      title: "Submit Feedback",
      onCloseComplete: () => this.setState({
        isShown: false
      }),
      onConfirm: () => {
        this.sendtogithubissue();
      }
    }, React.createElement(Pane, null, React.createElement(Paragraph, null, this.props.data.Contact.feedbacktitle, React.createElement(Text, null, " ", React.createElement("code", null, this.props.data.Contact.githubissue))))), React.createElement(Button, {
      onClick: () => this.setState({
        isShown: true
      }),
      marginTop: 20,
      intent: "success"
    }, "FeedBack")));
  }

}

export default Contact;
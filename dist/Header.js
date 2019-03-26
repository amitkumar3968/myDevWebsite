import Link from 'next/link';

const Header = props => React.createElement("div", {
  style: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'flex-end',
    backgroundColor: 'pink'
  }
}, React.createElement(Link, {
  href: "/About"
}, React.createElement("button", null, "Go to About Page")), React.createElement(Link, {
  href: "/"
}, React.createElement("button", null, "Go to Index Page")));

export default Header;
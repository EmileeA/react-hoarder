import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavBar = () => {
      if (authed) {
        return (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/stuff">My Stuff</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/stuff/new">New</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-light" onClick={this.logMeOut}>Log Out</button>
              </li>
            </ul>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };
    return (
  <div className="NavBar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
    <Link className="navbar-brand" to="/">Hoard Knock Life</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { buildNavBar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

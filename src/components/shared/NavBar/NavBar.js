import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg- navbar-dark bg-dark d-flex justify-content-between">
          <a className="navbar-brand" href="/">Trapin' Crap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
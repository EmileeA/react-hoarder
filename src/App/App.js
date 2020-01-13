/* eslint-disable no-irregular-whitespace */
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/shared/NavBar/NavBar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
    <div className="App">
      <NavBar authed={authed} />
      <Auth authed={authed} />
    </div>
    );
  }
}

export default App;

import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div ClassName="Home">
        <div className="homeTexth1">
      <h1>Welcome!</h1>
      </div>
      <div className="homeTexth5">
      <h5>Whatever you're looking for is in here somewhere...</h5>
      </div>
      <img src="https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Mah Hoard" />
      </div>
    );
  }
}

export default Home;

// Include React
import React, {Component} from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from 'react-router-dom';

class Main extends Component {

    // Here we render the function
  render() {

    return (
      <div className="container">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
          <a href="#" className="brand-logo"><h1>Dewey.</h1></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/library'>My Library</Link></li>
              <li><Link to="/groups">Groups</Link></li>
              <li><Link to="/Discover">Discover</Link></li>
              <li><Link to="/Logout" id="logout">Log Out</Link></li>
            </ul>
          </div>
        </nav>
          <div className="mainSection">
            {this.props.children}
          </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;

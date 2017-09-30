import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';


class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

      <div className="container">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"><h1>Dewey.</h1></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

              <li>
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home')}
                >
                  Home
            </Button>
              </li>
              {
                !isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                  </Button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
                  </Button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'library')}
                    >
                      Library
                  </Button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'groups')}
                    >
                      Groups
                  </Button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'discover')}
                    >
                      Discover
                  </Button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li>
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                  </Button>
                  </li>
                )
              }


              {/*             <li><Link to='/library'>My Library</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li><Link to="/Discover">Discover</Link></li>
            <li><Link to="/Logout" id="logout">Log Out</Link></li> */}
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

export default App;

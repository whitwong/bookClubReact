import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  flatButton: {
    textColor: '#ffffff',
  },
});


class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <nav className="z-depth-0">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo"><h1>Dewey.</h1></a>
              {
                isAuthenticated() && (
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                      <FlatButton
                        label="Library"
                        onTouchTap={this.goTo.bind(this, 'library')}
                      />
                    </li>
                    <li>
                      <FlatButton
                        label="Community"
                        onTouchTap={this.goTo.bind(this, 'community')}
                      />
                    </li>
                    <li>
                      <FlatButton
                        label="Library"
                        onTouchTap={this.goTo.bind(this, 'library')}
                      />
                    </li>
                    <li>
                      <FlatButton
                        label="Log Out"
                        onTouchTap={this.logout.bind(this)}
                      />
                    </li>
                  </ul>
                )
              }
            </div>
          </nav>

          <div className="mainSection">
            {this.props.children}
          </div>

        </div >
      </MuiThemeProvider>

    );
  }
}

export default App;

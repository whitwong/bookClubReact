// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
      <div className="container">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
          <a href="/library" className="brand-logo"><h1>Dewey.</h1></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/library" id="libraryPage">My Library</a></li>
              <li><a href="/groups">Groups</a></li>
              <li><a href="/discover">Discover</a></li>
              <li><a href="/logout" id="logout">Log Out</a></li>
            </ul>
          </div>
        </nav>
          <div classNameName="row">

            {/* This code will dump the correct Child Component */}
            {this.props.children}

          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

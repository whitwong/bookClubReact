var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var createReactClass = require('create-react-class');

var Library = createReactClass({

  // Here we render the function
  render() {

    return (
        <div className="row">
          <div className="col s3 about">
            <div className="row personalInfo">
              <h2 id="personalName">Username</h2>
              <p id="personalFavorite">Favorite Book: The Power of One</p>
              <p id="personalCurrent">"Currently Reading: You Dont Know JS"</p>
            </div>
          </div>
          <div className="col s9 bookList">
          <h2>Bookshelf</h2>
            <div id="tableLibrary"></div>
          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Library;
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Library = React.createClass({

  // Here we render the function
  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s3 about">
            // <div className="row">
              // <img id="profilePicture" src="../img/placeholder.png" className="circle responsive-img">
            // </div>
            <div className="row personalInfo">
              <h2 id="personalName"><%= user.name %></h2>
              <p id="personalFavorite">Favorite Book: The Power of One</p>
              <p id="personalCurrent">"Currently Reading: You Don't Know JS"</p>
              // <a id="editProfile">Edit</a>
            </div>
          </div>
          // <div className="col s1"></div>
          <div className="col s9 bookList">
          <h2><%= user.name %>Bookshelf</h2>
            // <a className="btn modal-trigger" href="#modal1" id="modalButton">Add a Book</a>
            <div id="tableLibrary"></div>
          </div>
        </div>


         // Modal Structure -->

        
        // <div id="modalBookInfo" class="modal">
        //   <div class="modal-content">
        //     <p id="chooseTitle">Title</p>
        //     <p id="chooseAuthor">Author</p>
        //     <p id="chooseRating">Rating</p>
        //     <p id="chooseSummary">Summary</p>      
        //     <p id="chooseComments">Comments</p>
        //   </div>
        //   <div class="modal-footer">
        //     <a href="#!" class="modal-action modal-close btn-flat"  id="deleteBook">Remove from Library</a>
        //     <a href="#!" class="modal-action modal-close btn-flat"  id="closeInfo">Close</a>
        //   </div>
        // </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Library;
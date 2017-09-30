import React, {Component} from 'react';

class LibraryResults extends Component {
	render() {
		return (
			<div className="container">
      	{this.props.results.map(function(search,i){
        	return (
        		<div className="book" key={i}>
              <p className="bookTitle">{search.title}</p>
              <img className="bookImage" id="bookImg" src={search.link}/>
        		</div>
        	)
        }
        )}
			</div>
		);
	}
};

export default LibraryResults;
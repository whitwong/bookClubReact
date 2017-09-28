import axios from 'axios';

const libraryHelpers = {
	bookSearch: function(title){
		const apiKey = "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY";
		const queryURL= "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ title +"&key=" + apiKey;
		return axios.get(queryURL).then(function(response){
			var returnedBook= response.data.items[0].volumeInfo.title;
			console.log(returnedBook);
			return returnedBook;
		});
	},
	showBooks: function(){

	},
	saveBook: function(title, author, comments){
		return axios.post("/api/library",
		{
			title: title,
			author: author,
			comments: comments
		});

	},
	deleteBooks: function(){

	}
}

export default libraryHelpers;
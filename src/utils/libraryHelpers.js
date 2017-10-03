import axios from 'axios';



const libraryHelpers = {
	getBookImageTitle: function(title){
		const apiKey = "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY";
		const queryURL= "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ title +"&key=" + apiKey;
		return axios.get(queryURL).then(function(response){
			var returnedDisplay={
				returnedLink:response.data.items[0].volumeInfo.imageLinks.thumbnail,
				returnedTitle:response.data.items[0].volumeInfo.title
			}
			return returnedDisplay;
		});
	},
	saveBook: function(title, author, comments, link, user){
		var newBook={
			title: title,
			author: author,
			comments: comments,
			link: link,
			UserId: user
		}
		return axios.post("/api/library",newBook);

	},
	showBooks: function(){
		return axios.get("/api/library");
	},
	modalInfo: function(title){
		const apiKey = "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY";
		const queryURL= "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ title +"&key=" + apiKey;
		return axios.get(queryURL).then(function(response){
			var results = response.data.items[0].volumeInfo;
			// console.log(results);
			var returnedBook = {
				title :  results.title,
				author : results.authors[0],
				rating : results.averageRating,
				description : results.description
			}
			return returnedBook;
		});
	},
	deleteBook: function(id){
		return axios.delete("/api/library/"+id);
	}
}

export default libraryHelpers;
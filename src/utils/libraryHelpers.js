import axios from 'axios';



const libraryHelpers = {
	getBookImage: function(title){
		const apiKey = "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY";
		const queryURL= "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ title +"&key=" + apiKey;
		return axios.get(queryURL).then(function(response){
			var returnedLink=response.data.items[0].volumeInfo.imageLinks.smallThumbnail
			return returnedLink;
		});
	},
	saveBook: function(title, author, comments, link){
		var newBook={
			title: title,
			author: author,
			comments: comments,
			link: link
		}
		// console.log("newBook ",require("util").inspect(newBook, {depth:null}));
		// console.log("newBook: "+newBook);
		return axios.post("/api/library",newBook);

	},
	showBooks: function(){
		return axios.get("/api/library");
	},
	deleteBooks: function(){

	}
}

export default libraryHelpers;
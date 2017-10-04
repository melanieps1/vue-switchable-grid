var demo = new Vue({

	el: '#main',

	data: {
		layout: 'grid',

		// variable to store the URL results from the API in an array
		cats: []
	},

	// Replaced `methods` with `mounted` so the function runs as soon as the page is loaded,
	// instead of it running when the function is called
	mounted: function() {

		// console.log(this.cats); <-- can still access the global var 'cats'
		var self = this;

		// Axios is a popular package to fetch from a URL https://github.com/axios/axios
		axios.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=6")
			// `.then` is a promise to return these things in order
			.then(function (response) {
				// console.log(response.data); // shows raw response data

				// copying from https://www.w3schools.com/xml/xml_parser.asp
				var parser = new DOMParser
				var data = parser.parseFromString(response.data, "text/xml");
				// console.log(data); // shows data after it was parsed so we can understand it better

				Array.from(data.getElementsByTagName('url'))
				.forEach(function(url) {
					// console.log(self.cats); // <-- cannot access the global var 'cats', in too deep, so created `var self = this` to pass it down deeper
					self.cats.push(url.innerHTML);
				});

			});
			console.log(self.cats);
	}

});
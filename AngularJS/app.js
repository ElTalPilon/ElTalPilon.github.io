var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrlr"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html"
			controller: "KartListCtrlr"
		})
	.otherwise({
		redirectTo: "/books"
	});
});

myApp.factory("bookService", function() {

	var books = [
		{
			imgUrl: "adultery.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys e"
		},
		{
			imgUrl: "geronimo.jpg",
			name: "Geronimo Stilton Spacemice #2: You're Mine, Captain!",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series! Meet Geronimo Stiltonix. He is"
		},
		{
			imgUrl: "life-or-death.jpg",
			name: "Life or Death",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a de"
		},
		{
			imgUrl: "playing.jpg",
			name: "Playing It My Way: My Autobiography",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if  I agreed to write my story, I would have to be completely honest, as that's the way I ha"
		}
	];

	return {
		getBooks: function() {
			return books;
		}
		addToKart: function(book) {
			
		}
	}
});

myApp.factory("kartService", function() {

	var kart = [];

	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
		},
		buy: function(book) {
			alert("Thanks for buying: ", book.name);
		}
	}
});

myApp.controller("HeaderCtrlr", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "We have 1 million books for you!";
});

myApp.controller("BookListCtrlr", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
});

myApp.controller("KartListCtrlr", function($scope, kartService) {
	$scope.kart = kartService.getKart();

	$scope.buy = function(book){
		kartService.buy(book);
	}
});
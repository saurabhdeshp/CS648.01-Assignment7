var movies = ["Mugen Train", "the wolf of wall street", "Naruto", "Grudge", "Harry Potter"];
window.console.log(movies[1]);

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
window.console.log(movies[0]);

var movies = ["Mugen Train", "the wolf of wall street", "Naruto", "Grudge", "Harry Potter"];
movies[movies.length] = "Chainsaw Man";
window.console.log(movies.length);

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
delete movies[0];
window.console.log(movies);

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "Your Name";
leastFavMovies[1] = "Weathering with you";
leastFavMovies[2] = "Happy Hour";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";

var leastFavMovies = [];
leastFavMovies[0] = "Your Name";
leastFavMovies[1] = "Weathering with you";
leastFavMovies[2] = "Happy Hour";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


var movies = [];
movies[0] = "Mugen Train";
movies[1] = "the wolf of wall street";
movies[2] = "Naruto";
movies[3] = "Grudge";
movies[4] = "Harry Potter";
movies[5] = "Chainsaw Man";
movies[6] = "Green Mile";

var leastFavMovies = [];
leastFavMovies[0] = "Your Name";
leastFavMovies[1] = "Weathering with you";
leastFavMovies[2] = "Happy Hour";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
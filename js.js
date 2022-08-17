let numberofFilms = prompt('Сколько фильмов вы посмотрели за неделю', '')
console.log(numberofFilms)
let personalMovieDB = {
    count: numberofFilms, 
    movies: {},
    actors: {},
    genres: [],
    prifat: false,
}
let a = prompt('Один из просмотернных фильмов', ''),
b = prompt('какую оценку вы ему дадите', ''),
c = prompt('Один из просмотернных фильмов', ''),
d = prompt('какую оценку вы ему дадите', '')
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB)
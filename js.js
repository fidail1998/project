let numberofFilms = prompt('Сколько фильмов вы посмотрели за неделю', '')

let personalMovieDB = {
    count: numberofFilms, 
    movies: {},
    actors: {},
    genres: [],
    prifat: false,
}


for (let i = 0; i < 1; i++) {1
    let a = prompt('Один из просмотернных фильмов', ''),
b = prompt('какую оценку вы ему дадите', '');

if (a == null || b == null || a == '' || b == '' || a.length > 50 ) {
    console.log('error');
    --i;
    
} else {
    personalMovieDB.movies[a] = b;
    console.log('done');
}

}
console.log(personalMovieDB)
if (numberofFilms < 10) {1
console.log ('просмотрено мало фильмов')
} else if (numberofFilms > 10 && numberofFilms < 30) {
    console.log('вы классический зритель') 
} else if (numberofFilms > 30) {
    console.log('вы киноман')
}


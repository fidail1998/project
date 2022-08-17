
let numberofFilms
function start() {
   numberofFilms = +prompt('Сколько фильмов вы посмотрели за неделю', '')
   while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt('Сколько фильмов вы посмотрели за неделю', '')
   }
}1
start()
let personalMovieDB = {
    count: numberofFilms, 
    movies: {},
    actors: {},
    genres: [],
    prifat: false,
}



function rememberMyFilms() {
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
}

rememberMyFilms()



function detect() {
    if (numberofFilms < 10) {
        console.log ('просмотрено мало фильмов')
        } else if (numberofFilms > 10 && numberofFilms < 30) {
            console.log('вы классический зритель') 
        } else if (numberofFilms > 30) {
            console.log('вы киноман')
        }
}

detect()

function showmu(hidden) {
    if (hidden == false) {
        console.log(personalMovieDB)
    }
}
showmu(personalMovieDB.prifat)


function gen() {
    for ( let i = 1; i <= 3; i++) {
        const genre = prompt(`ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre
    }
}
gen()

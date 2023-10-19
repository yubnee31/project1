const API_KEY = config.apikey;
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/movie/top_rated?language=en-US&page=1&"
    + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");
const form = document.getElementById("form");

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzM3MGEyMzFkYmJiMzFkNjVlYjVhY2M4MjYwM2VjNyIsInN1YiI6IjY1MmY0MTRkMDI0ZWM4MDBlNDQ3MWRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Mv7IHVd9NBouPyzMCV_5F-t9UhTWVVHmzo02-2UyIU'
    }
};

getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then(response => response.json()).then(response => {
            console.log(response.results);
            showMovies(response.results);
        })
        .catch(err => console.error(err));
}

function showMovies(response) {
    main.innerHTML = '';

    response.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href="#">
        <img src="${IMG_URL+poster_path}"
        art="image" onclick="alert('영화아이디: ${id}')"></a>
    <div class="movie-info">
        <h3>${title}</h3>
        <p class="overview">${overview}</p>
        <p class="average">Rating: ${vote_average}</p>
    </div>
        `

        main.appendChild(movieEl);
    })
}


form.addEventListener('submit', function(e) {
	e.preventDefault();

    console.log('제출');
})



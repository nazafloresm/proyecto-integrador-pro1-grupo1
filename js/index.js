let api_key = '700a3a180300423956be7a6dd87ae8b8';
let PeliculasPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1';
let SeriesPopulares = 'https://api.themoviedb.org/3/tv/popular?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1';
let PeliculasValoradas = 'https://api.themoviedb.org/3/movie/top_rated?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1';

let section = document.querySelector('#section');
let section2 = document.querySelector("#section2")
let section3 = document.querySelector("#section3")


fetch(PeliculasPopulares)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.results);
        let peliculas = data.results
        let informacion = ""
        for (let i = 0; i < 5; i++) {
            informacion += `<a href="./detail-movie.html?id=${peliculas[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}" alt="${peliculas[i].title}">
        <p class="descripcion"><a class="links" href="./detail-movie.html?id=${peliculas[i].id}">${peliculas[i].title}</a></p>
        <p class="descripcion">Estreno: ${peliculas[i].release_date}</p>
    </article></a>`
        }
        section.innerHTML = informacion
        return data
    }
    )
    .catch(function (error) {
        console.log(error);
    })


fetch(SeriesPopulares)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data.results);
        let series = data.results
        let informacion = ""
        for (let i = 0; i < 5; i++) {
            informacion += `<a href="./detail-serie.html?id=${series[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt="${series[i].name}">
        <p class="descripcion"><a class="links" href="./detail-serie.html?id=${series[i].id}">${series[i].name}</a></p>
        <p class="descripcion">Estreno: ${series[i].first_air_date}</p>
    </article></a>`
        }
        section2.innerHTML = informacion
        return data
    }
    )
    .catch(function (error) {
        console.log(error);
    })

fetch(PeliculasValoradas)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data.results);
        let PeliculasValoradas = data.results
        let informacion = ""
        for (let i = 0; i < 5; i++) {
            informacion += `<a href="./detail-movie.html?id=${PeliculasValoradas[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${PeliculasValoradas[i].poster_path}" alt="${PeliculasValoradas[i].original_title}">
        <p class="descripcion"><a class="links" href="./detail-movie.html?id=${PeliculasValoradas[i].id}">${PeliculasValoradas[i].title}</a></p>
        <p class="descripcion">Estreno: ${PeliculasValoradas[i].release_date}</p>
    </article></a>`
        }
        section3.innerHTML = informacion
        return data
    }
    )
    .catch(function (error) {
        console.log(error);
    })
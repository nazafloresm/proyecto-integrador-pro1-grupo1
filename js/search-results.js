let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let resultadoBusqueda = qsToObj.get('busqueda')

let urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&query=${resultadoBusqueda}&page=1&include_adult=false`
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&query=${resultadoBusqueda}&page=1&include_adult=false`

let seccion = document.querySelector('#seccion1')
let seccion2 = document.querySelector('#seccion2')
let titulo = document.querySelector('.titulos')


fetch(urlMovies)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        if (data.results.length > 0) {
            console.log(data.results);
            let peliculas = data.results
            let informacion = ""
            for (let i = 0; i < 5; i++) {
                informacion += `<a href="./detail-movie.html?id=${peliculas[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}" alt="${peliculas[i].title}">
        <p class="descripcion"><a class="links" href="./detail-movie.html?id=${peliculas[i].id}">${peliculas[i].title}</a></p>
        <p class="descripcion">Fecha: ${peliculas[i].release_date}</p>
    </article></a>`}
            seccion.innerHTML = informacion
            titulo.innerText = `Resultados de búsqueda para: ${resultadoBusqueda}`
        }
        else {
            seccion.innerHTML = `<p>No hay resultados para su búsqueda</p>`
        }
        return data
    })
    .catch(function (error) {
        console.log(error);
    })


fetch(urlSeries)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        if (data.results.length > 0) {
            console.log(data.results);
            let series = data.results
            let informacion = ""
            for (let i = 0; i < 5; i++) {
                informacion += `<a href="./detail-serie.html?id=${series[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt="${series[i].original_name}">
        <p class="descripcion"><a class="links" href="./detail-serie.html?id=${series[i].id}">${series[i].original_name}</a></p>
        <p class="descripcion">Fecha: ${series[i].first_air_date}</p>
    </article></a>`}
            seccion2.innerHTML = informacion
            titulo.innerText = `Resultados de búsqueda para: ${resultadoBusqueda}`
        }
        else {
            seccion2.innerHTML = `<p>No hay resultados para su búsqueda</p>`
        }
        return data
    })
    .catch(function (error) {
        console.log(error);
    }
    )

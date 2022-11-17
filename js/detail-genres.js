let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let urlMovieDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
let urlSerieDiscover = `https://api.themoviedb.org/3/discover/tv?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

let peliculasGenero = document.querySelector('#peliculasGenero')
let seriesGenero = document.querySelector('#seriesGenero')

fetch(urlMovieDiscover)

.then(function(response){
    return response.json()
})

.then(function(data){
    if (data.results.length > 0){
    console.log(data.results)
    let peliculas = data.results
    let informacion = ""
    for (let i=0; i<5; i++){
        informacion+=`<a href="./detail-movie.html?id=${peliculas[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}" alt="${peliculas[i].original_title}">
        <p class="descripcion"><a class="links" href="./detail-movie.html?id=${peliculas[i].id}">${peliculas[i].original_title}</a></p>
        <p class="descripcion">Estreno: ${peliculas[i].release_date}</p>
    </article></a>`
    peliculasGenero.innerHTML = informacion}
    }
    else{
        peliculasGenero.innerHTML = `<p>No hay resultados para su búsqueda</p>`
    }
})

.catch(function(error){
})


fetch(urlSerieDiscover)

.then(function(response){
    return response.json()
})

.then(function(data){
    if (data.results.length > 0){
    console.log(data.results)
    let series = data.results
    let informacion = ""
    for (let i=0; i<5; i++){
        informacion+=`<a href="./detail-movie.html?id=${series[i].id}"><article class="fotos">
        <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt="${series[i].original_name}">
        <p class="descripcion"><a class="links" href="./detail-movie.html?id=${series[i].id}">${series[i].original_name}</a></p>
        <p class="descripcion">Estreno: ${series[i].first_air_date}</p>
    </article></a>`
    seriesGenero.innerHTML = informacion}
    }
    else{
        seriesGenero.innerHTML = `<p>No hay resultados para su búsqueda</p>`
    }
})

.catch(function(error){
})
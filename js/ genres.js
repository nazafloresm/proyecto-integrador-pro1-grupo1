let urlMovies = `https://api.themoviedb.org/3/genre/movie/list?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`

let generoPeliculas = document.querySelector('#ul1')
let generoSeries = document.querySelector('#ul2')

fetch(urlMovies)
.then(function(response) {
    return response.json()
})

.then(function(data){
    console.log(data.genres)
    let generos = data.genres
    let informacion = ""
    for (let i=0; i<10; i++){
        informacion+= `<a href="./detail-genres.html?id=${generos[i].id}"> <li class="hijas_listas_generos">
        <a class="links" href="./detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>
      </li> </a>`
    }
    generoPeliculas.innerHTML = informacion
}
)

.catch(function(error){
    console.log(error);
})



fetch(urlSeries)
.then(function(response) {
    return response.json()
})

.then(function(data){
    console.log(data.genres)
    let generos = data.genres
    let informacion = ""
    for (let i=0; i<10; i++){
        informacion+= `<a href="./detail-genres.html?id=${generos[i].id}"> <li class="hijas_listas_generos">
        <a class="links" href="./detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>
      </li> </a>`
    }
    generoSeries.innerHTML = informacion
}
)

.catch(function(error){
    console.log(error);
})
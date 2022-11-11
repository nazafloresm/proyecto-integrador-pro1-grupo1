let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let article = document.querySelector('.detalles')

fetch(url)
.then(function(response){
    return response.json()
}
)

.then(function(data){
    console.log(data)
    let articulo = `<img class="img_detalle" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.original_title}">
                <h3 class="descripcion_detalle nombre">${data.original_title}</h3>
                <p class="descripcion_detalle rating">${data.vote_average}</p>
                <p class="descripcion_detalle fecha">Fecha: ${data.release_date}</p>
                <p class="descripcion_detalle duracion">Duración (min): ${data.runtime}</p>
                <p class="descripcion_detalle sinopsis">
                    Sinopsis: ${data.overview}
                </p>
                <p class="descripcion_detalle genero">Categoría:<a href="./detail-genres.html" class="links">${data.genres}</a></p>
                <form class="descripcion" action="favorites.html" name="Favoritos" method="GET">
                    <button class="boton" type="submit">Añadir a Favoritos</button>
                </form>`
    article.innerHTML = articulo
}
)

.catch(function(error){
    
}
)
let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let urlProviders = `https://api.themoviedb.org/3/watch/providers/tv?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let article = document.querySelector('#detalles1')
let article2 = document.querySelector('#detalles2')

fetch(url)
.then(function(response){
    return response.json()
}
)

.then(function(data){
    console.log(data)

    fetch(urlProviders)
    .then(function(response){
        return response.json()
    })

    .then(function(data2){
    console.log(data2.results)

    let provedores = data2.results
    let infoProvedores = ""
    for (let i=0; i < 3; i++){
        infoProvedores+= `<p class="descripcion_detalle">
        ${provedores[i]['provider_name']}
    </p>`
    article2.innerHTML=infoProvedores
    }
    }
    )

    .catch(function(error){
    })

    let generos = data.genres
    let informacion = ""
    for (let i=0; i< generos.length; i++){
        informacion+= `<p class="descripcion_detalle">
        ${generos[i]['name']}
    </p>`
    }

    let articulo = `<img class="img_detalle" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.original_name}">
                <h3 class="descripcion_detalle nombre">${data.original_name}</h3>
                <p class="descripcion_detalle rating">Rating: ${data.vote_average}</p>
                <p class="descripcion_detalle fecha">Fecha de estreno: ${data.first_air_date}</p>
                <p class="descripcion_detalle sinopsis">
                    Sinopsis: ${data.overview}
                </p>
                <p class="descripcion_detalle genero">Géneros:<a href="./detail-genres.html" class="links">${informacion}</a></p>
                <form class="descripcion" action="favorites.html" name="Favoritos" method="GET">
                    <button class="boton" type="submit">Añadir a Favoritos</button>
                </form>`
    article.innerHTML = articulo

}
)

.catch(function(error){
    
}
)
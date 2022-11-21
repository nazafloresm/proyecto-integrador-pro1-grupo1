let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let urlProviders = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=700a3a180300423956be7a6dd87ae8b8`
let verRecomendaciones= `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1`
let urlReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1`

let seccion = document.querySelector('#reviews')
let seccion2 = document.querySelector('#detalles2')
let seccion3 = document.querySelector('#detalles3')

let nombre = document.querySelector('.nombre')
let imagen = document.querySelector('.peliculaImg')
let rating = document.querySelector('.rating')
let fecha = document.querySelector('.fecha')
let duracion = document.querySelector('.duracion')
let sinopsis = document.querySelector('.sinopsis')
let genero = document.querySelector('.genero')
let boton = document.querySelector('.boton')
let botonrecom = document.querySelector('.botonrecom')



fetch(url)
.then(function(response){
    return response.json()
}
)

.then(function(data){
    console.log(data)

    let generos = data.genres
    let informacion = ""
    for (let i=0; i< generos.length; i++){
        informacion+= `<a href="./detail-genres.html?id=${data.genres[i].id}" class="links"><p class="descripcion_detalle">
        Género: ${generos[i]['name']}</p></a>`
    }

    imagen.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    nombre.innerText = data.original_title
    rating.innerText = `Rating: ${data.vote_average}`
    fecha.innerText = `Fecha: ${data.release_date}`
    duracion.innerText = `Duración (min): ${data.runtime}`
    sinopsis.innerText = `Sinopsis: ${data.overview}`
    genero.innerHTML = informacion

}
)

.catch(function(error){  
}
)

fetch(urlProviders)
.then(function(response){
    return response.json()
    })

.then(function(data){
    console.log(data.results.US.buy)

    if (data.results.US.buy.length >0){

    let provedores = data.results.US.buy
    let infoProvedores = ""

    for (let i=0; i < provedores.length; i++){
        infoProvedores+= `<p class="descripcion_detalle">
        ${provedores[i]['provider_name']}</p>
        <img class="provedor" src="https://image.tmdb.org/t/p/w500${provedores[i]['logo_path']}" alt="">`}
        seccion2.innerHTML=infoProvedores
    }
    else{
        seccion2.innerHTML=`<p>
        No hay provedores disponibles</p>`
    }
    })

.catch(function(error){
})


fetch(verRecomendaciones)

.then(function(response){
    return response.json()
    })
    
.then(function(data){
    console.log(data.results)
    let recomendaciones = data.results
    let informacion = ""
    for (let i=0; i < 3; i++){
        informacion+= `<article class="fotos">
        <h3 class="titulos">Recomendación</h3>
        <a href="./detail-movie.html?id=${recomendaciones[i].id}"> <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${recomendaciones[i].poster_path}" alt="${recomendaciones[i].title}">
        </article></a>`
        }
        seccion3.innerHTML = informacion
    
    })
    
.catch(function(error){  
})

let favoritosPelicula = []
let recuperoStorage = localStorage.getItem('favoritosPelicula')

if (recuperoStorage != null){
    favoritosPelicula = JSON.parse(recuperoStorage)
}

if (favoritosPelicula.includes(id)){
    boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(e){
    e.preventDefault()
    if (favoritosPelicula.includes(id)){
        let indice = favoritosPelicula.indexOf(id)
        favoritosPelicula.splice(indice,1)
        boton.innerText = "Agregar a favoritos"
    }
    else{
        favoritosPelicula.push(id)
        boton.innerText = "Quitar de favoritos"
    }
    let favToString = JSON.stringify(favoritosPelicula)
    localStorage.setItem('favoritosPelicula', favToString)
})

let muestraRecomendacion = false

botonrecom.addEventListener('click', function(){
    
    if (muestraRecomendacion) {
        seccion3.style.display = 'none'
        botonrecom.innerText = 'Ver recomendaciones'
        muestraRecomendacion = false
    } else {
        seccion3.style.display = 'flex'
        botonrecom.innerText = 'ocultar recomendaciones'
        muestraRecomendacion = true
    }
})

fetch(urlReviews)

.then(function(response){
    return response.json()
    })
    
.then(function(data){
    console.log(data.results)
    let reviews = data.results
    let infoReviews = ""

    for (let i=0; i < 2; i++){
        infoReviews += `<p class="descripcion_detalle">
        Autor: ${reviews[i].author}</p>
        <p class="descripcion_detalle">
        Review: ${reviews[i].content}</p>`}
        seccion.innerHTML=infoReviews
})

.catch(function(error){  
})
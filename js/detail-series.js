let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`
let urlProviders = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=700a3a180300423956be7a6dd87ae8b8`
let verRecomendaciones= `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1`


let seccion = document.querySelector('#detalles2')
let seccion2 = document.querySelector('#detalles3')

let nombre = document.querySelector('.nombre')
let imagen = document.querySelector('.serieImg')
let rating = document.querySelector('.rating')
let fecha = document.querySelector('.fecha')
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
    nombre.innerText = data.original_name
    rating.innerText = `Rating: ${data.vote_average}`
    fecha.innerText = `Fecha: ${data.first_air_date}`
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
    console.log(data.results.MX.flatrate)

    if (data.results.MX.flatrate.length > 0){
        let provedores = data.results.MX.flatrate
    let infoProvedores = ""

    for (let i=0; i < provedores.length; i++){
        infoProvedores+= `<p class="descripcion_detalle">
        ${provedores[i]['provider_name']}</p>
        <img class="provedor" src="https://image.tmdb.org/t/p/w500${provedores[i]['logo_path']}" alt="">`
    }
    seccion.innerHTML=infoProvedores
    }
    else{
        seccion.innerHTML= `<p>No hay provedores disponibles</p>`
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
        <a href="./detail-serie.html?id=${recomendaciones[i].id}"> <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${recomendaciones[i].poster_path}" alt="${recomendaciones[i].original_name}">
        </article></a>`
        }
        seccion2.innerHTML = informacion
        })
        
.catch(function(error){  
})

let favoritosSeries = []
let recuperoStorage = localStorage.getItem('favoritosSeries')

if (recuperoStorage != null){
    favoritosSeries = JSON.parse(recuperoStorage)
}

if (favoritosSeries.includes(id)){
    boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(e){
    e.preventDefault()
    if (favoritosSeries.includes(id)){
        let indice = favoritosSeries.indexOf(id)
        favoritosSeries.splice(indice,1)
        boton.innerText = "Agregar a favoritos"
    }
    else{
        favoritosSeries.push(id)
        boton.innerText = "Quitar de favoritos"
    }
    let favToString = JSON.stringify(favoritosSeries)
    localStorage.setItem('favoritosSeries', favToString)
})

let muestraRecomendacion = false

botonrecom.addEventListener('click', function(){
    
    if (muestraRecomendacion) {
        seccion2.style.display = 'none'
        botonrecom.innerText = 'Ver recomendaciones'
        muestraRecomendacion = false
    } else {
        seccion2.style.display = 'flex'
        botonrecom.innerText = 'ocultar recomendaciones'
        muestraRecomendacion = true
    }
})
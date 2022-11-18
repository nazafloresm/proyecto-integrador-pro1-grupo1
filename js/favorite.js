let recuperoStoragePelis = localStorage.getItem('favoritosPelicula')
let recuperoStorageSeries = localStorage.getItem('favoritosSeries')

let favoritosPelis = JSON.parse(recuperoStoragePelis)
let favoritosSeries = JSON.parse(recuperoStorageSeries)

let seccionPelis = document.querySelector('#favoritosPelis')
let seccionSeries = document.querySelector('#favoritosSeries')

let peliculas = ""
if (favoritosPelis == null || favoritosPelis.length == 0) {
    seccionPelis.innerHTML = '<p>No hay películas en favoritos</p>'
}
else {
    for (let i = 0; i < favoritosPelis.length; i++) {
        let url = `https://api.themoviedb.org/3/movie/${favoritosPelis[i]}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US`

        fetch(url)
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (data) {
                console.log(data)
                peliculas += `<a href="./detail-movie.html?id=${data.id}"><article class="fotos">
                <img class="img_tarjeta" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.original_title}">
                <p class="descripcion"><a class="links" href="./detail-movie.html?id=${data.id}">${data.title}</a></p>
                <p class="descripcion">Estreno: ${data.release_date}</p>
            </article></a>`;
                seccionPelis.innerHTML = peliculas;
                return data;
            })
            .catch(function (error) {
                console.log(error)
                return error
            })
    }
}
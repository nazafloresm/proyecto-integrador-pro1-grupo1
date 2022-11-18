let recuperoStoragePelis = localStorage.getItem('favoritosPelicula')
let recuperoStorageSeries = localStorage.getItem('favoritosSeries')

let favoritosPelis = JSON.parse(recuperoStoragePelis)
let favoritosSeries = JSON.parse(recuperoStorageSeries)

let seccionPelis = document.querySelector('#favoritosPelis')
let seccionSeries = document.querySelector('#favoritosSeries')
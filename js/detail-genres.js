let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let urlMovieDiscover = `https://api.themoviedb.org/3/discover/movie${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
let urlSerieDiscover = `https://api.themoviedb.org/3/discover/tv${id}?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

fetch(urlMovieDiscover)

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)})

.catch(function(error){
})
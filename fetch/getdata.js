fetch('./data/csolData.json')
.then(response=>response.json())
.then(data =>  {
    const movies = data.movies;
    
    movies.forEach(movie => {
        console.log(movie.title)
    });
})
.catch(error=>{
    console.log(error)
})
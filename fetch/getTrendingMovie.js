const movieList = [];

fetch("./data/trendingMov.json")
  .then((response) => response.json())
  .then((trendingMovies) => {
    const listMovies = trendingMovies.results;
    listMovies.forEach((list) => {
      movieList.push(list);
    });

    printMovies();
  })
  .catch(() => console.log("no data found"));




  //print the movies
  function printMovies() {
    console.log(movieList)
    
    if (movieList.length === 0) {
      console.log("No movies to display"); 
      return;
    }
  
    movieList.forEach((movie) => console.log(movie.title)); 
  }


  
// const movieList = [];

// async function fetchMovies() {
//   try {
//     const response = await fetch("./data/trendingMov.json"); // Await fetch
//     const trendingMovies = await response.json(); // Await JSON parsing

//     if (!trendingMovies.results) throw new Error("No results found"); // Handle missing data

//     movieList.push(...trendingMovies.results); // Efficiently add movies
//     printMovies(); // Call function after data is ready
//   } catch (error) {
//     console.error("Error fetching movies:", error); // Log error if fetch fails
//   }
// }

// // Print movies
// function printMovies() {
//   console.log(movieList); // Log the array for debugging

//   if (movieList.length === 0) {
//     console.log("No movies to display");
//     return;
//   }

//   movieList.forEach((movie) => console.log(movie.title));
// }

// // Call the async function
// fetchMovies();

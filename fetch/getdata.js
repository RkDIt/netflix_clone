fetch('./data/csolData.json')
  .then(response => response.json())
  .then(movie_data => {
    const data = movie_data.movies; // data is now the movies array

    let currentIndex = 0;
    const slideshow = document.getElementById("slideshow");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const genre = document.getElementById("genre");
    const watchNow = document.getElementById("watch")

    watchNow.addEventListener("click",()=> {
      const movie = data[currentIndex]

      console.log(movie);

      window.location.href = "../Dashboard"
    })


    function updateSlideshow() {
      const movie = data[currentIndex]; // Access the current movie directly from the data array
      slideshow.style.backgroundImage = `url('${movie.image}')`;
      title.textContent = movie.title;
      description.textContent = movie.description;
      genre.textContent = movie.genre

      
      
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % data.length; // Use data.length instead of data.movies.length
      updateSlideshow();
    }

    // Initialize Slideshow
    updateSlideshow();
   
    setInterval(nextSlide, 6000); // Change slide every 5 seconds
  })
  .catch(error => {
    console.log(error);
  });
// Fade in the hero section when the page loads
window.addEventListener("load", function() {
  document.querySelector(".hero-section").style.opacity = 1;
});

// Add a hovering effect to the movie cards
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((movieCard) => {
  movieCard.addEventListener("mouseover", () => {
    movieCard.style.transform = "scale(1.1)";
  });

  movieCard.addEventListener("mouseout", () => {
    movieCard.style.transform = "scale(1)";
  });
});

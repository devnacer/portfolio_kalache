// Select all elements with the "card-project" class
const cardProjects = document.querySelectorAll(".card-project");

// Function to toggle the CSS class on hover
function toggleTransition() {
  this.classList.toggle("transitionY-to-top");
}

// Add an event handler for each element with the "card-project" class
cardProjects.forEach((cardProject) => {
  cardProject.addEventListener("mouseover", toggleTransition);
  cardProject.addEventListener("mouseout", toggleTransition);
});

// Add a "click" event handler to each card
cardProjects.forEach((card) => {
  card.addEventListener("click", () => {
    // Get the "See More Details" link of the current card
    const seeMoreLink = card.querySelector(".link-project .see-more-link");

    if (seeMoreLink) {
      // Redirect the user to the "See More Details" page of the current card
      window.location.href = seeMoreLink.href;
    }
  });
});

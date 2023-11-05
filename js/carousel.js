// Select all buttons with the "data-carousel-button" attribute
const buttons = document.querySelectorAll("[data-carousel-button]");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Determine the offset based on whether it's the "next" or "prev" button
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // Find the slides container within the closest parent with "data-carousel" attribute
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    // Find the currently active slide within the slides container
    const activeSlide = slides.querySelector("[data-active]");

    // Calculate the new index for the slide to be activated
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // Handle cases where the index goes below 0 or exceeds the total number of slides
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    // Activate the new slide and deactivate the old one
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// _______________________________________
// Using a self-invoking function to avoid global space pollution
(function () {
  const body = document.body;
  let lastScroll = 0;

  // Function to handle scroll behavior
  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  }

  // Function to check window width and enable/disable scroll event listener
  function checkWidth() {
    if (window.innerWidth > 1024) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Check the current window width on page load
  checkWidth();

  // Also add a resize listener to check width when the window is resized
  window.addEventListener("resize", checkWidth);
})();

// __________humberger btn__________________________
// Select the element with the "hamburger" class
const humburger = document.querySelector(".humburger");
// Select all the links in the navigation
const navLinks = document.querySelectorAll("nav ul li a");

// select the navigation
const nav = document.querySelector("nav");
const calque = document.querySelector(".calque");

// Add a click event handler for the "hamburger" and the navigation
humburger.addEventListener("click", () => {
  // Toggle the "active" class on the element with the "hamburger" class
  humburger.classList.toggle("active");

  // Show or hide the navigation
  nav.classList.toggle("nav-open");
  // Activate the layer animation "calque"
  calque.classList.toggle("calque-active");
});

// Add a click event handler for each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the "nav-open" class to close the navigation
    nav.classList.remove("nav-open");
    // Remove the "active" class from the hamburger button
    humburger.classList.remove("active");
    calque.classList.remove("calque-active");
  });
});

calque.addEventListener("click", () => {
  // Toggle the "active" class on the element with the "humburger" class
  humburger.classList.toggle("active");

  // Show or hide the navigation
  nav.classList.toggle("nav-open");
  // Activate the claque animation
  calque.classList.toggle("calque-active");
});

// __________________________
// __________________________
// Function to detect the currently visible section and highlight the corresponding link in the navigation
function highlightVisibleSection() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const navLinks = document.querySelectorAll("#menu a");

  const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= 200 && rect.bottom >= 200;
  };

  navLinks.forEach((link) => {
    link.classList.remove("highlighted");
  });

  if (isElementVisible(header)) {
    // Header is visible
    navLinks[0].classList.add("highlighted");
  } else if (isElementVisible(footer)) {
    // Footer is visible
    navLinks[navLinks.length - 1].classList.add("highlighted");
  } else {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      if (isElementVisible(section)) {
        // The section is visible
        navLinks[index + 1].classList.add("highlighted");
      }
    });
  }
}

// Remaining code...

// Scroll event listener to update the navigation
window.addEventListener("scroll", highlightVisibleSection);

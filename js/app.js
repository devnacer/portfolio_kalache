// ________________________smooth scroll________________________________

document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links with target IDs
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  // Add a click event handler to each link
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Get the target ID from the href attribute
      var targetId = link.getAttribute("href").substring(1);

      // Select the target section by its ID
      var targetSection = document.getElementById(targetId);

      // Scroll the page to the target section smoothly
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// ____________________END__smooth scroll________________________________

// _____________________Download or See Curriculum_____________________

// Get references to the buttons
const downloadButton = document.getElementById("download-cv-button");
const viewButton = document.getElementById("view-cv-button");

// Function to handle the click on the download button
downloadButton.addEventListener("click", () => {
  // Create a temporary link
  const link = document.createElement("a");
  link.href = "assets/cv_Kalache2024.pdf"; // Path to your PDF file
  link.download = "cv_Kalache2024.pdf"; // File name when downloaded
  link.target = "_blank"; // Open the link in a new tab
  link.click();
});

// Function to handle the click on the view button
viewButton.addEventListener("click", () => {
  // Redirect the user to the PDF file in a new tab
  window.open("assets/KALACHE_cv.pdf", "_blank");
});

// ____________________END_Download or See Curriculum_____________________

// ____________________btn go to the top__________________________________
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// _________________end of___btn go to the top____________________________

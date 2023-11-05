const bgAnimation = document.getElementById("bgAnimation");

const numberOfColorBoxes = 700;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}

// const bgAnimation = document.getElementById("bgAnimation");
// const colorBoxSize = 50;
// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;

// const boxesPerRow = Math.floor(screenWidth / colorBoxSize);
// const rows = Math.floor(screenHeight / colorBoxSize);

// const numberOfColorBoxes = boxesPerRow * rows;

// for (let i = 0; i < numberOfColorBoxes; i++) {
//   const colorBox = document.createElement("div");
//   colorBox.classList.add("colorBox");
//   bgAnimation.append(colorBox);
// }

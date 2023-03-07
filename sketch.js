// Wait for 10 seconds before displaying the image
// Define an array of images to be used
const images = [
  "pics/green-star.svg",
  "pics/pink-star-01.svg",
  "pics/purple-star.svg",
];

// Define the dimensions of the browser window
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// Set a timer to repeat the process at a regular interval
let intervalId = setInterval(() => {
  // Generate a random position within the dimensions of the browser window
  const positionX = Math.floor(Math.random() * windowWidth);
  const positionY = Math.floor(Math.random() * windowHeight);

  // Select a random image from the array
  const imageSrc = images[Math.floor(Math.random() * images.length)];

  // Create an HTML element for the image and add it to the webpage
  const image = document.createElement("img");
  image.src = imageSrc;
  image.style.width = "100px";
  document.body.appendChild(image);

  // Set the position of the image using CSS
  image.style.position = "absolute";
  image.style.left = `${positionX}px`;
  image.style.top = `${positionY}px`;

  // Add a mousemove event listener to the document
  document.addEventListener("mousemove", handleMouseMove);

  // Define the handleMouseMove function
  function handleMouseMove(event) {
    // Remove the image from the document
    image.remove();

    // Remove the mousemove event listener from the document
    document.removeEventListener("mousemove", handleMouseMove);

    // Clear the timer interval
    clearInterval(intervalId);
  }
}, 2000);

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");

const img = new Image();
img.src = "scooty.jpg";

img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Convert hex color (#ff0000) to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Check if two colors are similar
function isSimilarColor(r1, g1, b1, r2, g2, b2, tolerance) {
  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance
  );
}

canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();

  // Mouse position on canvas
  const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
  const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));

  // Get all pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Get clicked pixel color
  const clickedIndex = (y * canvas.width + x) * 4;
  const targetR = pixels[clickedIndex];
  const targetG = pixels[clickedIndex + 1];
  const targetB = pixels[clickedIndex + 2];

  console.log("Clicked color:", targetR, targetG, targetB);

  // Selected new color from picker
  const newColor = hexToRgb(colorPicker.value);

  // Tolerance (adjust this)
  const tolerance = 45;

  // Loop through all pixels
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // If pixel is similar to clicked color
    if (isSimilarColor(r, g, b, targetR, targetG, targetB, tolerance)) {
     
      pixels[i] = r * 0.4 + newColor.r * 0.6;       
      pixels[i + 1] = g * 0.4 + newColor.g * 0.6;  
      pixels[i + 2] = b * 0.4 + newColor.b * 0.6;   
      
    }
  }

  // Put updated pixels back on canvas
  ctx.putImageData(imageData, 0, 0);
});
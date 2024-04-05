const gridBox = document.getElementById("gridBox");

// Commented out unused variables
// const btn32 = document.getElementById("btn32")
// const btn64 = document.getElementById("btn64")

let totalBoxes = 0;

function createGrid(pix) {
    console.log(`create grid ${pix}*${pix}`);
    gridBox.innerHTML = "";
    totalBoxes = pix * pix;
    const boxWidth = 100 / pix + "%"; 
    const boxHeight = 100 / pix + "%"; 
    
    // Creating grid boxes dynamically
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.className = "pixel";
        box.style.width = boxWidth;
        box.style.height = boxHeight;
        gridBox.appendChild(box);
    }
}

// Accessing all the pixel elements
const pixels = document.querySelectorAll(".pixel");

// Setting border styles for pixels based on the total number of boxes
pixels.forEach(pixel => {
    if (totalBoxes >= 64 * 64) {
        pixel.style.border = "1px solid rgba(0,0,0,0.5)";
    } else if (totalBoxes >= 32 * 32) {
        pixel.style.border = "1px solid rgba(0,0,0,0.1)";
    }
});

// Adding event listener to each pixel to change its background color on mouseover
pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function() {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const color = `rgb(${red}, ${green}, ${blue})`;
        pixel.style.backgroundColor = color;
    });
});

// Commented out event listeners for buttons
// I already tried using js to click button but it is still not working
// btn32.addEventListener("click", function(){
//     createGrid(32);
// });
// btn64.addEventListener("click", function(){
//     createGrid(64);
// });

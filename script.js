// Retrieving DOM elements
const gridBox = document.getElementById("gridBox");
const gridRange = document.getElementById("gridRange");
const gridValue = document.getElementById("gridValue");
const btnRandom = document.getElementById("randomColor");
const btnBlack = document.getElementById("blackColor");
const btnClear = document.getElementById("clear");
const btnErase = document.getElementById("erase");
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const redValue = document.getElementById("redValue");   
const greenValue = document.getElementById("greenValue");   
const blueValue = document.getElementById("blueValue");   
const ranges = document.querySelectorAll(".range");
const colorBox = document.getElementById("colorBox"); 

let totalBoxes = 0;

// Function to create the grid with given pixel size
function createGrid(pix) {
    console.log(`${pix}x${pix} Grid`);
    gridBox.innerHTML = "";
    totalBoxes = pix * pix;
    const boxWidth = 100 / pix + "%"; 
    const boxHeight = 100 / pix + "%"; 
    
    // Creating individual pixels within the grid
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.className = "pixel";
        box.style.width = boxWidth;
        box.style.height = boxHeight;
        box.style.border = "1px solid #000";
        gridBox.appendChild(box);
        
        // Adjusting border transparency based on grid size
        if (totalBoxes >= 128 * 128) {
            box.style.border = "1px solid rgba(0,0,0,0.5)";
        } else if (totalBoxes >= 64 * 64) {
            box.style.border = "1px solid rgba(0,0,0,0.75)";
        } else if (totalBoxes >= 32 * 32) {
            box.style.border = "1px solid rgba(0,0,0,1)";
        }
    }
    modifyPixel(); // Calling function to modify pixels
}

// Initial creation of grid with size 3x3
createGrid(12);

// Function to modify pixel behavior
function modifyPixel() {
    const pixels = document.querySelectorAll(".pixel");
    
    pixels.forEach(pixel => {
        // Event listener for random color button
        btnRandom.addEventListener("click", function() {
            pixel.addEventListener("mouseover", function() {
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                const color = `rgb(${red}, ${green}, ${blue})`;
                pixel.style.backgroundColor = color;
            });
        });
        
        // Event listener for clear button
        btnClear.addEventListener("click", function() {
            pixel.style.backgroundColor = "#fff";
        });
        
        // Event listener for erase button
        btnErase.addEventListener("click", function() {
            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = "rgb(255,255,255)";
            });
        });
        
        // Event listeners for RGB sliders
        redSlider.addEventListener("input", function() {
            let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = color;
            });
        });
        
        greenSlider.addEventListener("input", function() {
            let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = color;
            });
        });
        
        blueSlider.addEventListener("input", function() {
            let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = color;
            });
        });
        
        // Event listener for black color button
        btnBlack.addEventListener("click", function() {
            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = "rgb(0,0,0)";
            });
        });
    });
}

// Event listeners for RGB sliders to update their respective values
redSlider.addEventListener("input", function() {
    redValue.innerHTML = redSlider.value;
    updateColorBoxBackground();
});

greenSlider.addEventListener("input", function() {
    greenValue.innerHTML = greenSlider.value;
    updateColorBoxBackground();
});

blueSlider.addEventListener("input", function() {
    blueValue.innerHTML = blueSlider.value;
    updateColorBoxBackground();
});

// Function to update the color preview box
function updateColorBoxBackground() {
    const color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
    colorBox.style.backgroundColor = color;
}

// Event listener for grid range slider to create grid with new size
gridRange.addEventListener("input", function() {
    createGrid(gridRange.value);
    gridValue.innerHTML = gridRange.value;
});

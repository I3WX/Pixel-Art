const gridBox = document.getElementById("gridBox");
let totalBoxes = 0;

function createGrid(pix) {
    totalBoxes = pix * pix;
    const boxWidth = 100 / pix + "%"; 
    const boxHeight = 100 / pix + "%"; 
    
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.className = "pixel";
        box.style.width = boxWidth;
        box.style.height = boxHeight;
        gridBox.appendChild(box);
    }
}

createGrid(32);

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function() {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const color = `rgb(${red}, ${green}, ${blue})`;
        pixel.style.backgroundColor = color;
    });
});

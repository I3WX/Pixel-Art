const gridBox = document.getElementById("gridBox");

let totalBoxes = 0;

function createGrid(pix) {
    gridBox.innerHTML = "";
    totalBoxes = pix * pix;
    const boxWidth = 100 / pix + "%"; 
    const boxHeight = 100 / pix + "%"; 
    
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.className = "pixel";
        box.style.width = boxWidth;
        box.style.height = boxHeight;
        box.style.border = "1px solid #000"
        gridBox.appendChild(box);
        box.addEventListener("mouseover", function() {
            const red = Math.round(Math.random() * 255);
            const green = Math.round(Math.random() * 255);
            const blue = Math.round(Math.random() * 255);
            const color = `rgb(${red}, ${green}, ${blue})`;
            box.style.backgroundColor = color;
        });
        if (totalBoxes >= 64 * 64) {
            box.style.border = "1px solid rgba(0,0,0,0.75)";
        } else if (totalBoxes >= 32 * 32) {
            box.style.border = "1px solid rgba(0,0,0,1)";
        }
    }
}

function clearGrid() {
    console.log("Clear");
    gridBox.innerHTML = "";
}

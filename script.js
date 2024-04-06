const gridBox = document.getElementById("gridBox");
const btnRandom = document.getElementById("randomColor");
const btnBlack = document.getElementById("blackColor");
const btnClear = document.getElementById("clear");
const btnErase = document.getElementById("erase");
const redSlider = document.getElementById("redSlider")
const greenSlider = document.getElementById("greenSlider")
const blueSlider = document.getElementById("blueSlider")
const redValue = document.getElementById("redValue");   
const greenValue = document.getElementById("greenValue");   
const blueValue = document.getElementById("blueValue");   
const range = document.getElementsByClassName("range")

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
        btnRandom.addEventListener("click", function(){
            box.addEventListener("mouseover", function() {
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                const color = `rgb(${red}, ${green}, ${blue})`;
                box.style.backgroundColor = color;
                });
        })
        btnBlack.addEventListener("click", function(){
            box.addEventListener("mouseover",function(){
                box.style.backgroundColor = "rgb(0,0,0)"
            })
        })
        btnClear.addEventListener("click", function(){
            box.style.backgroundColor = ""
            
        })
        btnErase.addEventListener("click", function(){
            box.addEventListener("mouseover",function(){
                box.style.backgroundColor = "rgb(255,255,255)"
            })
        })

        // range.addEventListener("input",function(){

        // })

        
        if (totalBoxes >= 128 * 128) {
            box.style.border = "1px solid rgba(0,0,0,0.5)";}
        else if (totalBoxes >= 64 * 64) {
            box.style.border = "1px solid rgba(0,0,0,0.75)";
        } else if (totalBoxes >= 32 * 32) {
            box.style.border = "1px solid rgba(0,0,0,1)";
        }
    }
}
createGrid(32)

redSlider.addEventListener("input", function() {
    redValue.innerHTML = redSlider.value;
});

greenSlider.addEventListener("input", function() {
    greenValue.innerHTML = greenSlider.value;
});

blueSlider.addEventListener("input", function() {
    blueValue.innerHTML = blueSlider.value;
});

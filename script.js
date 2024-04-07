const gridBox = document.getElementById("gridBox");
const gridRange = document.getElementById("gridRange");
const gridValue = document.getElementById("gridValue");
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
const ranges = document.querySelectorAll(".range")
const colorBox = document.getElementById("colorBox"); 
  

let totalBoxes = 0;

function createGrid(pix) {
    console.log(`${pix}x${pix} Grid`)
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
        
        
    
        if (totalBoxes >= 128 * 128) {
        box.style.border = "1px solid rgba(0,0,0,0.5)";}
        else if (totalBoxes >= 64 * 64) {
            box.style.border = "1px solid rgba(0,0,0,0.75)";} 
        else if (totalBoxes >= 32 * 32) {
            box.style.border = "1px solid rgba(0,0,0,1)";}
        
        }
    modifiePixel()
    }

createGrid(3)



function modifiePixel(){
    const pixels = document.querySelectorAll(".pixel") 
    pixels.forEach(pixel =>{
        btnRandom.addEventListener("click", function(){
            pixel.addEventListener("mouseover", function() {
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                const color = `rgb(${red}, ${green}, ${blue})`;
                pixel.style.backgroundColor = color;
            });
        })
        btnClear.addEventListener("click", function(){
            pixel.style.backgroundColor = ""
            
        })
        btnErase.addEventListener("click", function(){
            pixel.addEventListener("mouseover",function(){
                pixel.style.backgroundColor = "rgb(255,255,255)"
            })
        })
        
        redSlider.addEventListener("input", function(){
            pixel.addEventListener("mouseover",function(){
                let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`
                pixel.style.backgroundColor = color;
            })
        })
        greenSlider.addEventListener("input", function(){
            pixel.addEventListener("mouseover",function(){
                let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`
                pixel.style.backgroundColor = color;
            })
        })
        blueSlider.addEventListener("input", function(){
            pixel.addEventListener("mouseover",function(){
                let color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`
                pixel.style.backgroundColor = color;
            })
        })
        btnBlack.addEventListener("click", function(){
            pixel.addEventListener("mouseover",function(){
                pixel.style.backgroundColor = "rgb(0,0,0)"
            })
        })
        
    })
}
    
    
redSlider.addEventListener("input", function() {
        redValue.innerHTML = redSlider.value;
        updateColorBoxBackground()
    });
    
greenSlider.addEventListener("input", function() {
        greenValue.innerHTML = greenSlider.value;
        updateColorBoxBackground()
    });
    
blueSlider.addEventListener("input", function() {
        blueValue.innerHTML = blueSlider.value;
        updateColorBoxBackground()
    });
function updateColorBoxBackground() {
        const color = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
        colorBox.style.backgroundColor = color;
    }
gridRange.addEventListener("input",function(){
        createGrid(gridRange.value);
        gridValue.innerHTML = gridRange.value;
    })
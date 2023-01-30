let pixel = document.querySelector(".pixel-input");
let rem = document.querySelector(".rem-input");
let remBtn = document.querySelector(".rem-btn");
let pixelBtn = document.querySelector(".pixel-btn");
let restart = document.querySelector(".refresh");
let calcRem = Number(rem.value * 16);
let answerDisplay = document.createElement("p");
let calcPixel = Number(pixel.value / 16);
let pixelDisplay = document.createElement("p");


pixelBtn.addEventListener("click", () => {
    let calcPixel = Number(pixel.value / 16);
    pixelDisplay = document.createElement("p");
    pixelDisplay.id = "pixeldisplay";
    document.body.appendChild(pixelDisplay);
    pixelDisplay.textContent = `${calcPixel} rem`;

})

remBtn.addEventListener("click", () => {
    let calcRem = Number(rem.value * 16);
    answerDisplay = document.createElement("p");
    answerDisplay.id = "answerdisplay";
    document.body.appendChild(answerDisplay);
    answerDisplay.textContent = ` ${calcRem} px `;

})

restart.addEventListener("click", () => {
    pixelDisplay.textContent = "";
    answerDisplay.textContent = "";
    rem.value = "";
    pixel.value = "";
});
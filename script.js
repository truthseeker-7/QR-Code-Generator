let generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
let containerCode = document.querySelector(".container-code");
containerCode.classList.add("active"); 
let codeImg = document.querySelector(".code-img");

let text = document.getElementById("url-input").value;

codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
codeImg.addEventListener("load", () => {
    codeImg.classList.add("active"); 
    generateBtn.innerText = "Generating QR Code..."
})
});
let generateBtn = document.getElementById("generate");

generateBtn.onclick = function(){
let containerCode = document.querySelector(".container-code");
containerCode.classList.toggle("active"); 
let codeImg = document.querySelector(".code-img");

let text = document.getElementById("url-input").value;

codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
codeImg.classList.toggle("active"); 
}
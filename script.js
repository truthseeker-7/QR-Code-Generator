let generateBtn = document.getElementById("generate");

generateBtn.onclick = function(){
let containerCode = document.querySelector(".container-code");
containerCode.classList.toggle("active"); 
let codeImg = document.querySelector(".code-img");
codeImg.classList.toggle("active"); 
}
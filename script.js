let generateBtn = document.getElementById("generate");
let codeImg = document.querySelector(".code-img");
let containerCode = document.querySelector(".container-code");

generateBtn.addEventListener("click", () => {
    let text = document.getElementById("url-input").value;
    if(text == ''){
        codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Coded By Pawlos Million Zeyede`;
        containerCode.classList.add("active"); 
        codeImg.classList.add("active"); 
        return;
    }

codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
containerCode.classList.add("active"); 
codeImg.addEventListener("load", () => {
    codeImg.classList.add("active"); 
})
});
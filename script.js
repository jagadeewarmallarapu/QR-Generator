const img = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const Input = document.getElementById("Input-text");
const button = document.getElementById("button");

button.onclick = function generate(){
    qrImg.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Input.value;
}

button.addEventListener("click", () =>{
    imgBox.style.display = "block";
    
})

Input.addEventListener("click" , () =>{
    imgBox.style.display = "none";
})



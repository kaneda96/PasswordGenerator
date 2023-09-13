let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass ="";
    for (let index = 0, n = charset.length; index < sliderElement.value; index++) {
       pass += charset.charAt(Math.floor(Math.random() * n))        
    }
    containerpassword.classList.remove("hide")
    password.innerHTML = pass
}

function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha)
}
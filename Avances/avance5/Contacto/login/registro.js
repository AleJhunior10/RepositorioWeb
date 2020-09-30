const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("advertencia")

form.addEventListener("submit",e=>
{
    e.preventDefault()
    let advertencia = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 6)
    {
        advertencia += `* Ingrese un nombre <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value))
    {
        advertencia += `* El email no es valido <br>`
        entrar = true
    }
    if(password.value.length < 8)
    {
        advertencia += `* La contraseña no es valido <br>`
        entrar = true
    }
    if(entrar)
    {
        parrafo.innerHTML = advertencia
    }else
    {
        parrafo.innerHTML = "enviado"
    }
});
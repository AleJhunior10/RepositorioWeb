let animado = document.querySelectorAll(".animation2");

function mostrar(){
    let scrolltop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++)
    {
        let altura = animado[i].offsetTop;
        if(altura - 600 < scrolltop)
        {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarIzquierda");
        }

    }
}

window.addEventListener('scroll', mostrar);
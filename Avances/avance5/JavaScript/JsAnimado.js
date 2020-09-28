let animado = document.querySelectorAll(".animation");

function mostrar(){
    let scrolltop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++)
    {
        let altura = animado[i].offsetTop;
        if(altura - 600 < scrolltop)
        {
            animado[i].style.opacity = 1;
            animado[0].classList.add("mostrarDerecha");
            animado[1].classList.add("mostrarIzquierda");
            animado[2].classList.add("mostrarDerecha");
            animado[3].classList.add("mostrarIzquierda");
        }

    }
}

window.addEventListener('scroll', mostrar);
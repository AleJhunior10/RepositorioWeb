(function(){
    $(document).ready(function(){
        $('.login').click(function(){
            $('.Formularios').animate({
                height: "toggle",
                opacity: 'toggle'
            }, 600);
            $('#dos').css("background", "green");
        });

        let formRegistro = document.getElementsByName('form-input');
        for (let i = 0; i < formRegistro.length; i++) {
            formRegistro[i].addEventListener('blur', function(){
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('vacio');
                    $("#validacion").text('');

                } else if (this.value.length = " ") {
                    this.nextElementSibling.classList.add('vacio');
                    this.nextElementSibling.classList.remove('active');
                    $("#validacion").text('Complete el formulario');
                } else {
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }
    })
}())

var modeDark = function() {
    $("body").css("background", "black");
    //$('.Formulario').css({'background' : 'black', 'border' : 'white 1px solid', 'border-radius' : '10px'});
    $('.dark').css("display", "none");

};

var modeLuz = function() {
    $("body").css("background", "cornflowerblue");
    $('.dark').css("display", "inline");
};

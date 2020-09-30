
var nombre = document.getElementById('nombre');
var contraseña = document.getElementById('contraseña');
var error = document.getElementById('error');

var form = document.getElementById('formulario');

form.addEventListener('submit', function(evt){
	evt.preventDefault();
	var mensajeError = [];
	if(nombre.value === null || nombre.value === '')
	{
		mensajeError.push('Ingresa tu Nombre de Usuario');
	}
	if(contraseña.value === null || contraseña.value === '')
	{	
		mensajeError.push('Ingresa tu Contraseña');
	}	
	error.innerHTML = mensajeError.join(' e ');
})
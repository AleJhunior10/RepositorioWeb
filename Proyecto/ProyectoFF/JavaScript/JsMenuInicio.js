/*var fechaActual = new Date();

var dia=fechaActual.getDate();
var mes=fechaActual.getMonth()+1;
var anio=fechaActual.getDay();

var hora=fechaActual.getHours();
var min=fechaActual.getMinutes();
var seg=fechaActual.getSeconds();


document.write(fechaActual);*/

/*function getHours(){}*/

var h = new Date();
var hora = ((h.getHours() < 10) ? "0" : "") + h.getHours();
var min = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
var seg = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

/*var dia=h.getDay();
var mes=h.getMonth()+1;
var anio=h.getFullYear();*/

document.write(hora + " : " + min + " : " + seg /*+ " de " + dia + " / " + mes + " / " + anio*/);

/*
var hoy = new Date();
var numDia = hoy.getUTCDate() - 1;
var mes = hoy.getUTCMonth() + 1;
var anio = hoy.getUTCFullYear();
var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
var numeroDiaSemana = hoy.getDay();

document.write("Hora : " + hora + " : " + min + " : " + seg + " Fecha : " +  dias[numeroDiaSemana] + " " + numDia +" / "+ mes + " / " + anio);
document.write();
*/
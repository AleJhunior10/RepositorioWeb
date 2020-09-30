var hoy = new Date();
var numDia = hoy.getUTCDate() - 1;
var mes = hoy.getUTCMonth() + 1;
var anio = hoy.getUTCFullYear();
var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
var numeroDiaSemana = hoy.getDay();

document.write(/*dias[numeroDiaSemana] + " " +*/numDia +" / "+ mes + " / " + anio);
document.write();
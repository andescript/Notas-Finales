//VARIABLES
//Variables de identificación
var nombre         = prompt("Ingresa tu nombre: ");
var apellido       = prompt("Ingresa tu apellido: ");
var carrera        = prompt("Ingresa el nombre de tu carrera: ");
//Variables de Asignatura 1 y sus notas
var asignaturaA    = prompt("Ingrese el nombre de la asignatura 1");
var nota1A         = prompt("Ingrese Nota 1 ["+asignaturaA+"]");
var nota2A         = prompt("Ingrese Nota 2 ["+asignaturaA+"]");
var nota3A         = prompt("Ingrese Nota 3 ["+asignaturaA+"]");
nota1A             = parseInt(nota1A);
nota2A             = parseInt(nota2A);
nota3A             = parseInt(nota3A);
var promedioA      = parseFloat((nota1A + nota2A + nota3A) / 3).toFixed(2);
//Variables de Asignatura 2 y sus notas
var asignaturaB    = prompt("Ingrese el nombre de la asignatura 2");
var nota1B         = prompt("Ingrese Nota 1 ["+asignaturaB+"]");
var nota2B         = prompt("Ingrese Nota 2 ["+asignaturaB+"]");
var nota3B         = prompt("Ingrese Nota 3 ["+asignaturaB+"]");
nota1B             = parseInt(nota1B);
nota2B             = parseInt(nota2B);
nota3B             = parseInt(nota3B);
var promedioB      = parseFloat((nota1B + nota2B + nota3B) / 3).toFixed(2);
//Variables de Asignatura 3 y sus notas
var asignaturaC    = prompt("Ingrese el nombre de la asignatura 3");
var nota1C         = prompt("Ingrese Nota 1  ["+asignaturaC+"]");
var nota2C         = prompt("Ingrese Nota 2  ["+asignaturaC+"]");
nota1C             = parseInt(nota1C);
nota2C             = parseInt(nota2C);
var notaAprobacion = prompt("Ingrese Nota requerida para aprobar");
var notaRequerida  = parseFloat((notaAprobacion * 3) - (nota1C + nota2C)).toFixed(2);

//CONTENIDO WEB
//Contenedor
document.write("<div class='container p-0'>");
//Cabecera
document.write("<div class='row'>");
document.write("<div class='col-sm-8'>");  //columna izquieda
//Encabezado
document.write("<h1 class='pt-5'>Notas finales</h1>");
//Datos personales (nombre y carrera)
document.write("<table class='table table-sm table-borderless w-50'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th scope='col'>Nombre</th>");
document.write("<td scope='col'>"+nombre+" "+apellido+"</td>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>Carrera</th>");
document.write("<td>"+carrera+"</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("</div>"); //cierra columna izquieda
//logo
document.write("<div class='col-sm-4 d-none d-sm-block pt-5 pr-5 text-right'>");  //columna derecha
document.write("<img src='assets/img/logo.png' height='60px' alt='logo desafio latam'>");
document.write("</div>"); //cierra columna derecha
document.write("</div>"); //cierra row

//TABLA BOOSTRAP
document.write("<table class='table font-weight-bold'>");
//Encabezado
document.write("<thead class='bg-dark text-white'>");
//Columnas
document.write("<tr>");
//Datos cabecera
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
//Cuerpo y contenido de la tabla
document.write("<tbody>");
//Fila 1
document.write("<tr>");
document.write("<td scope='row'>"+asignaturaA+"</td>");
document.write("<td>"+nota1A+"</td>");
document.write("<td>"+nota2A+"</td>");
document.write("<td>"+nota3A+"</td>");
document.write("<td>"+promedioA+"</td>");
document.write("</tr>");
//Fila 2
document.write("<tr>");
document.write("<td scope='row'>"+asignaturaB+"</td>");
document.write("<td>"+nota1B+"</td>");
document.write("<td>"+nota2B+"</td>");
document.write("<td>"+nota3B+"</td>");
document.write("<td>"+promedioB+"</td>");
document.write("</tr>");
//Fila 3
document.write("<tr>");
document.write("<td scope='row'>"+asignaturaC+"</td>");
document.write("<td>"+nota1C+"</td>");
document.write("<td>"+nota2C+"</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr");
//Cierra el cuerpo de la tabla
document.write("</tbody>");
//Cierra la tabla
document.write("</table>");

//TEXTO FINAL
document.write("<p>Para aprobar el ramo "+asignaturaC+" con nota "+notaAprobacion+", necesitas obtener un "+notaRequerida+" en la nota 3.</p>");
//Cierra contenedor
document.write("</div>");

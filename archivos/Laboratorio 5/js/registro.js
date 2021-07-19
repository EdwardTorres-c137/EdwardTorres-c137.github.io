// Creamos un vector que contenga la informacion
var registro=[];
// Creamos un procedimiento para registrar
function Registrar (nombreregistro,apellidoregistro,correoregistro){
    var NuevoRegistro={
        nombre:nombreregistro,
        apellido:apellidoregistro,
        correo:correoregistro
    };
    registro.push(NuevoRegistro);
}
// Creamos una funcion para obtener los valores del registro
function Mostrar(){
    return registro;
}
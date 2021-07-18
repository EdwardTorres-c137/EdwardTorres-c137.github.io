<<<<<<< HEAD
// creamos un vector para el producto
var producto=[];
// Creamos un procedimiento para registrar
// categoria se va a registrar de un combobox -> select
// categoria: Entretenimiento, Tecnologia, Linea Blanca
function Registrar (nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}
// Creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
=======
// creamos un vector para el producto
var producto=[];
// Creamos un procedimiento para registrar
// categoria se va a registrar de un combobox -> select
// categoria: Entretenimiento, Tecnologia, Linea Blanca
function Registrar (nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}
// Creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
>>>>>>> 9f4f49cab135d107e740a60a02a6b81a43f3b1b0
}
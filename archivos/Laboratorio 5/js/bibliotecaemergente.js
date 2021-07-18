<<<<<<< HEAD
// creamos un procedimiento para cuando cargue el documento abra la ventana emergente
function Cargar(url,titulo,ancho,alto){
    // declaramos varaibles para capturar el ancho y el alto de la pantalla
    var  anc=screen.width;
    var alt=screen.height;
    // declaramos variables para ubicar la ventana emergente en el centro
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+", scrollbars=NO")
}

// llamamos a la funcion Cargar
=======
// creamos un procedimiento para cuando cargue el documento abra la ventana emergente
function Cargar(url,titulo,ancho,alto){
    // declaramos varaibles para capturar el ancho y el alto de la pantalla
    var  anc=screen.width;
    var alt=screen.height;
    // declaramos variables para ubicar la ventana emergente en el centro
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+", scrollbars=NO")
}

// llamamos a la funcion Cargar
>>>>>>> 9f4f49cab135d107e740a60a02a6b81a43f3b1b0
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);
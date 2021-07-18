// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var cboCategoria=document.getElementById("cboCategoria");
var txtCan=document.getElementById("txtCantidad");
var tbRegistro=document.getElementById("tbRegistro");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        // declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocategoría=fila.insertCell(2);
        var titulocantidad=fila.insertCell(3);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloprecio.innerHTML=listaregistro[i].precio;
        titulocategoría.innerHTML=listaregistro[i].categoria;
        titulocantidad.innerHTML=listaregistro[i].cantidad;
        tbody.appendChild(fila);
    }
}


// creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    if(cboCategoria.value==0){
        cat="No seleccionado";
    }else if(cboCategoria.value==1){
        cat="Entretenimiento";
    }else if(cboCategoria.value==2){
        cat="Tecnologia";
    }else if(cboCategoria.value==3){
        cat="Linea Blanca";
    }
    // capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var cat
    var can=txtCan.value;
    // llamamos al procedimiento Registrar
    Registrar(nom,pre,cat,can);
    MostrarRegistro();
}

// asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);
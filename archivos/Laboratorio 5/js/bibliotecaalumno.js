<<<<<<< HEAD
// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var curso=document.getElementById("curso");
var web=document.getElementById("web");
var data=document.getElementById("data");
var java=document.getElementById("java");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var tbAlumno=document.getElementById("tbAlumno");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        // declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloapellidos=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocurso=fila.insertCell(3);
        var tituloturno=fila.insertCell(4);
        var tituloestado=fila.insertCell(5);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombres;
        tituloapellidos.innerHTML=listaregistro[i].apellidos;
        titulodni.innerHTML=listaregistro[i].dni;
        titulocurso.innerHTML=listaregistro[i].curso;
        tituloturno.innerHTML=listaregistro[i].turno;
        tituloestado.innerHTML=listaregistro[i].estado;
        tbody.appendChild(fila);
    }
}


// creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    if(rbM.checked==true){
        tur="Mañana";
    }else if (rbT.checked==true){
        tur="Tarde";
    }else if (rbN.checked==true){
        tur="Noche";
    }


    if(chkEst.checked==true){
        est="Habilitado"
    }else{
        est="No habilitado"
    }

    // if(curso.checked==true){
    //     cur="No seleccionado";
    // }else if(web.checked==true){
    //     cur="Diseño Web";
    // }else if(data.checked==true){
    //     cur="Base de datos";
    // }else if(java.checked==true){
    //     cur="Programación Java";
    // }
    if(cboCurso.value==0){
        cur="No seleccionado";
    }else if(cboCurso.value==1){
        cur="Diseño Web";
    }else if(cboCurso.value==2){
        cur="Base de Datos";
    }else if(cboCurso.value==3){
        cur="Programacion en Java";
    }
    // capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur
    var tur
    var est

    // llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,tur,est);
    MostrarRegistro();
}

// asignamos la funcion registrar datos al boton
=======
// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var curso=document.getElementById("curso");
var web=document.getElementById("web");
var data=document.getElementById("data");
var java=document.getElementById("java");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var tbAlumno=document.getElementById("tbAlumno");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        // declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloapellidos=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocurso=fila.insertCell(3);
        var tituloturno=fila.insertCell(4);
        var tituloestado=fila.insertCell(5);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombres;
        tituloapellidos.innerHTML=listaregistro[i].apellidos;
        titulodni.innerHTML=listaregistro[i].dni;
        titulocurso.innerHTML=listaregistro[i].curso;
        tituloturno.innerHTML=listaregistro[i].turno;
        tituloestado.innerHTML=listaregistro[i].estado;
        tbody.appendChild(fila);
    }
}


// creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    if(rbM.checked==true){
        tur="Mañana";
    }else if (rbT.checked==true){
        tur="Tarde";
    }else if (rbN.checked==true){
        tur="Noche";
    }


    if(chkEst.checked==true){
        est="Habilitado"
    }else{
        est="No habilitado"
    }

    // if(curso.checked==true){
    //     cur="No seleccionado";
    // }else if(web.checked==true){
    //     cur="Diseño Web";
    // }else if(data.checked==true){
    //     cur="Base de datos";
    // }else if(java.checked==true){
    //     cur="Programación Java";
    // }
    if(cboCurso.value==0){
        cur="No seleccionado";
    }else if(cboCurso.value==1){
        cur="Diseño Web";
    }else if(cboCurso.value==2){
        cur="Base de Datos";
    }else if(cboCurso.value==3){
        cur="Programacion en Java";
    }
    // capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur
    var tur
    var est

    // llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,tur,est);
    MostrarRegistro();
}

// asignamos la funcion registrar datos al boton
>>>>>>> 9f4f49cab135d107e740a60a02a6b81a43f3b1b0
btnRegistrar.addEventListener("click",RegistrarDatos);
<<<<<<< HEAD
// declaramos variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
// creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

// creamos un procedimiento para registrar
function Registrar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingresa la contraseña");
        txtCon.focus();
    }else{
        // capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        // llamando al codigo de Firebase para registrar
        firebase.auth().createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Se registro el usuario");
    Limpiar();
  })
  .catch((error) => {
    alert("No se registro el usuario")
    Limpiar();
  });
    }
}

// asignamos el procedimiento al boton
=======
// declaramos variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
// creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

// creamos un procedimiento para registrar
function Registrar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingresa la contraseña");
        txtCon.focus();
    }else{
        // capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        // llamando al codigo de Firebase para registrar
        firebase.auth().createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Se registro el usuario");
    Limpiar();
  })
  .catch((error) => {
    alert("No se registro el usuario")
    Limpiar();
  });
    }
}

// asignamos el procedimiento al boton
>>>>>>> 9f4f49cab135d107e740a60a02a6b81a43f3b1b0
btnRegistrar.addEventListener("click",Registrar);
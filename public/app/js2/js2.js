
var user = document.getElementById('user');
var pass = document.getElementById('pass');

function inicio() {
    console.log("dio click en boton"); 
    if (user.value == "user" && pass.value == "user") {
       
    console.log("USUARIO:" + user.value);
    console.log("USUARIO:" + pass.value);
    window.location="indexreservas.html";
    
      //  window.location = "../../../indexreservas";
    }
    if(user.value == "admin" && pass.value == "admin"){
        window.location="indexadmin.html";


    }
   
}
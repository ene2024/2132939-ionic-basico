function Login() {
    var usuario = document.getElementById("miUsuario").value;
    var password = document.getElementById("miPassword").value;
    var mensaje = document.getElementById("mensajeLogin-Registro");
    
    if (usuario.trim() !== "" && password.trim() !== "") {
        mensaje.innerText = "Login correcto " + usuario;
    } else {
        mensaje.innerText = "Por favor, ingrese un usuario y password válido.";
    }
}

function Registrar() {
    var usuario = document.getElementById("miUsuario").value;
    var password = document.getElementById("miPassword").value;
    var mensaje = document.getElementById("mensajeLogin-Registro");
    
    if (usuario.trim() !== "" && password.trim() !== "") {
        mensaje.innerText = "Registro correcto " + usuario;
    } else {
        mensaje.innerText = "Por favor, ingrese un usuario y password válido para el registro.";
    }
}
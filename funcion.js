function imprimir() {
    // Obtiene el valor del input
    var campoTexto = document.getElementById("miTexto").value;

    // Imprime en la consola
    console.log("Valor del campo de texto:", campoTexto);
    alert(campoTexto);
}

function borrar() {
    // Limpia el valor del input
    document.getElementById("miTexto").value = "";
    alert("Se borrara el texto");

}

function aspecto() {

    document.body.style.backgroundColor = getRandomColor();
    document.getElementById("miTexto").style.backgroundColor = getRandomColor();

    var footer = document.querySelector('footer');
    footer.style.backgroundColor = getRandomColor();
    footer.style.color = getRandomColor();
}

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


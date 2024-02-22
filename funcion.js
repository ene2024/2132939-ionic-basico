var articulo = "";
var monto = 0;
var total = 0;



function agregar(){
    articulo=document.getElementById("articulo").value;
    monto=document.getElementById("monto").value;
    monto = parseInt(monto);
    if(isNaN(monto)) {
        alert("Por favor, ingrese un monto válido.");
        return; 
    }

    let divLista =document.getElementById("Lista");
    let elementoTicket = document.createElement("p");
    elementoTicket.textContent = articulo + "...." + monto;
    divLista.innerHTML = elementoTicket.outerHTML;

    total += monto
    document.getElementById("total").textContent = "Total: " + total;

    document.getElementById("articulo").value = "";
    document.getElementById("monto").value = "";
}

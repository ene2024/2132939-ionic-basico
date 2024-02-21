var articulo = "";
var monto = 0;
var total = 0;



function agregar(){
    articulo=document.getElementById("articulo").value;
    monto=document.getElementById("monto").value;
    
    let elementoTicket = document.createElement("p");
    elementoTicket.innerHTML = articulo + "...." + monto;
}

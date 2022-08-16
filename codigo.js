const carrito=[];
const bikinis=[
    {
        codigo:"2345123",
        nombre:"mara",
        modelo:"bikini",
        precio:3450
    }
];

let miBoton=document.getElementById("boton");
miBoton.onclick=()=>{
    alert("Agregaste bikini "+bikinis[0].nombre+" al carrito :)");
    carrito.push(bikinis);
    console.table(carrito);
}
miBoton.onmouseover=()=>{
    console.log("haga click para comprar!");
    miBoton.className="btn btn-danger"
}
miBoton.onmouseout=()=>{
    miBoton.className="btn btn-primary";
}
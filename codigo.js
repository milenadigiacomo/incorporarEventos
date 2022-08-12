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
    console.log("Agregaste bikini "+bikinis.nombre+" al carrito :)");
    carrito.push(bikinis);
    console.table(carrito);
}
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
 event.preventDefault()
  event.preventDefault()
  console.log("hizo click")
 let producto=document.getElementById("Producto").value
 console.log (producto) 
 let edad=document.getElementById("Edad").value
 console.log (edad) 
 let cantidad=document.getElementById("Cantidad").value
 console.log (cantidad)
 let edad=Number(prompt("Edad"))
console.log("su edad es " + (edad))
if(edad>18){
alert("puedes continuar")
}else
alert("no puedes seguir")
}
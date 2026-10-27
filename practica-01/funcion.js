function calcularArea(ancho, alto) {
  return ancho * alto;
}

let area;
let anchoVar = Number(prompt("Ingrese el ancho: "));
let altoVar = Number(prompt("Ingrese el alto: "));
area=calcularArea(anchoVar,altoVar);
alert("El área es: "+area);
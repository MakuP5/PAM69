let contadorPesados = 0;

for (let i = 1; i <= 8; i++) {
  let valor = Number(prompt("Ingrese el tamano del archivo:"));
  if (valor>100){
    contadorPesados++;
  }
}

alert("Tiene : " + contadorPesados +" archivos pesados de mas de 100MB");
let saldo = Number(prompt("Ingresa tu saldo:"));
let saldoRestante;
if (saldo > 0) {                     // IF EXTERNO
  let retiro = Number(prompt("Digita el monto de retiro"));
        if (retiro > 0) {              // IF INTERNO
          if (retiro <= saldo) {              // IF INTERNO
            saldoRestante=saldo-retiro;
            alert("Transacción completada, tu saldo actual es: "+ saldoRestante);
          }else {
            alert("Fondos insuficientes");
          }  
    } else {
      alert("Cantidad inválida");
    }  
} else {                              // ELSE EXTERNO
    alert("No tiene saldo disponible");
}

let edad = Number(prompt("Edad:"));

if (edad >= 18) {                     // IF EXTERNO
  let reserva = prompt("¿Reserva? si/no")
    .trim().toLowerCase();

  if (reserva === "si") {              // IF INTERNO
    alert("Puedes entrar");
  } else {
    alert("Primero debes reservar");
  }

} else {                              // ELSE EXTERNO
  alert("Acceso restringido por edad");
}
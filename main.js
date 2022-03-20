let numero = prompt("ingresa cuantos litros de nafta necesitas");
let i = 0;
let precioNafta = parseInt(110);
let resultado = 0;
while (i != numero) {
  i++;

  if (numero <= 0 || isNaN(numero)) {
    numero = prompt(`"${numero}" no es un numero valido.
      ingresa cuantos litros de nafta necesitas`);
  } else {
    resultado = i * precioNafta;
    if (i != numero) {
      continue;
    }

    document.write(`${i} lts son = ${resultado} $ <br>`);
  }
}
document.write(
  `usted acaba de comprar ${numero} litros de nafta. muchas gracias por su compra`
);

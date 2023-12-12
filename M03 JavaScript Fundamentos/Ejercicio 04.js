/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:

  //return num ** 2;
  //return num * num;
  //return Math.pow(num, 2);
  elevado = Math.pow(num, 2);
  return elevado;
}

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  //return num ** 3;
  //return num * num * num;
  //return Math.pow(num, 3);
  elevado = Math.pow(num, 3);
  return elevado;
}

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  //return num ** exponent;
  //return Math.pow(num, exponent);
  elevado = Math.pow(num, exponent);
  return elevado;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:

  //return Math.round(num);
  numero = Math.round(num);
  return numero;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  //return Math.ceil(num);
  numero = Math.ceil(num);
  return numero;
}

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:

  //return Math.random();
  numRandom = Math.random();
  return numRandom;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
};

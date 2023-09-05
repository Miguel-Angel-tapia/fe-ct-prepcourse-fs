/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  //return array[0];
  //return array.shift();
  primerElemento = array.shift();
  return primerElemento;
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  //return array.pop();
  let ultimo = array.pop();
  return ultimo;
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  //return array.length;
  let largoTotal = array.length;
  return largoTotal;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  let masUno = array.map((num) => {
    return num + 1;
  });
  return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  let frase = "";
  for (let i = 0; i < palabras.length; i++) {
    frase = frase.concat(palabras[i]);
    if (i < palabras.length - 1) {
      frase = frase.concat(" ");
    }
  }
  return frase;
}
function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  // if (array.includes(elemento)) {
  //  return true;
  //} else {
  // return false;
  //}
  return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  let suma = arrayOfNums.reduce((acc, cur) => acc + cur);
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  for (let i = 0; i < resultadosTest.length; i++) {
    let suma = resultadosTest.reduce((acc, cur) => acc + cur);
    promedio = suma / resultadosTest.length;
  }
  return promedio;
}
function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  masGrande = 0;
  for (let i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > masGrande) {
      masGrande = arrayOfNums[i];
    }
  }
  return masGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  }
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  let mayores = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 18) {
      mayores++;
    }
  }
  return mayores;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  switch (numeroDeDia) {
    case 1:
    case 7:
      return "Es fin de semana";
      break;

    default:
      return "Es dia laboral";
      break;
  }
}

function empiezaConNueve(num) {
  numero = num.toString();
  if (numero[0] == "9") {
    return true;
  } else {
    return false;
  }
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  let iguales = array[0];
  for (let i = 1; i < array.length; i++) {
    if (iguales === array[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function mesesDelAño(array) {
  let mesesOrdenados = [];
  for (let i = 0; i < array.length; i++) {
    let meses = array[i];
    if (meses === "Enero" || meses === "Marzo" || meses === "Noviembre") {
      mesesOrdenados.push(meses);
    }
  }
  if (
    mesesOrdenados.includes("Enero") &&
    mesesOrdenados.includes("Marzo") &&
    mesesOrdenados.includes("Noviembre")
  ) {
    return mesesOrdenados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    multiplicar = 6 * i;
    tabla.push(multiplicar);
  }
  {
    return tabla;
  }
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  mayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  let numAumentado = [];
  for (let i = 0; i < 10; i++) {
    if (num === i) {
      return "Se interrumpió la ejecución";
      break;
    }
    num += 2;
    numAumentado.push(num);
  }

  return numAumentado;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  nuevoArray = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num += 2;
    nuevoArray.push(num);
  }
  return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};

//Creamos una función en la cuál podamos validar el número de una tarjeta de crédito.

//Definimos primero la función con el nombre  isValidCard
function isValidCard(array) {
  //Iniciamos con un prompt para que el usuario ingrese su número de tarjeta.
  var cardNumber = parseInt(prompt('Ingrese su número de Tarjeta \n Nota: Debe contener 16 números y sin espacios.'));
 //con el sgte for buscamos algún espacio en el número de tarjeta
  for (i = 0; i.length < 16; i++) {
    //Creamos una condición en la cúal si hay no hay un espacio revertimos el orden del array, sino que nos regrese al prompt inicial.
    if (cardNumber(i) !== " ") {
      var cardNumber1 = cardNumber.slice(i, 0, cardNumber.pop())
    }
    else {
      return cardNumber;
    }
  }
//una vez obtenido la invrsa del array inicial, multiplicamos por dos los números que se encuentren en la posición par,
//pero como empiezo a contar desde el 0 y lo condiciono a que es mayor que cero, trabajaré con la posición impar.
  for (j = 0; 0 < j < cardNumber1.length; j + 2)
   var  cardNumber2=((j + 2) * 2);
    //una vez multiplicado, procedo a sumar los elementos de la variable cardNumber2
  var sum;
  //Se suman los numeros del do mientras se cumpla lo establecido en el while.
  do (sum = cardNumber1.slice(i) + cardNumber1.slice(i++));
  while (0 <= i < 16);
  // A la variable sum se le saca el modulo con 10 y se le introduce este resultado en una nueva variable llamda rest
  var rest = sum % 10;
  // Para saber si una tarjeta de crédito es válida, el módulo debe ser cero, es por eso que creamos un if
  if (rest = 0) {
    //si el residuo es cero, emitiremos un prompt con el mensaje "tarjeta de crédito válida"
    prompt('tarjeta de credito valida')
  }
  // sino devolveremos un prompt con el sgte mensaje.
  else {
    return prompt('numero de tarjeta incorrecto')
  }
  return(isValidCard)
};
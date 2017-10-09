
# TARJETA DE CRÉDITO VÁLIDA

## PSEUDOCODIGO

Creamos una función en la cuál podamos validar el número de una tarjeta de crédito.

Definimos primero la función con el nombre  isValidCard

function isValidCard(array) {

Iniciamos con un prompt para que el usuario ingrese su número de tarjeta.
  
  var cardNumber = parseInt(prompt('Ingrese su número de Tarjeta \n Nota: Debe contener 16 números y sin espacios.'));

con el sgte for buscamos algún espacio en el número de tarjeta

  for (i = 0; i.length < 16; i++) {

Creamos una condición en la cúal si hay no hay un espacio revertimos el orden del array, sino que nos regrese al prompt inicial.

    if (cardNumber(i) !== " ") {

      var cardNumber1 = cardNumber.slice(i, 0, cardNumber.pop())

    }

    else {

      return cardNumber;

    }
  }
una vez obtenido la invrsa del array inicial, multiplicamos por dos los números que se encuentren en la posición par,

pero como empiezo a contar desde el 0 y lo condiciono a que es mayor que cero, trabajaré con la posición impar.

   for (j = 0; 0 < j < cardNumber1.length; j + 2)

   var  cardNumber2=((j + 2) * 2);

una vez multiplicado, procedo a sumar los elementos de la variable cardNumber2
  var sum;

Se suman los numeros del do mientras se cumpla lo establecido en el while.
  do (sum = cardNumber1.slice(i) + cardNumber1.slice(i++));

  while (0 <= i < 16);

A la variable sum se le saca el modulo con 10 y se le introduce este resultado en una nueva variable llamada rest

  var rest = sum % 10;

Para saber si una tarjeta de crédito es válida, el módulo debe ser cero, es por eso que creamos un if
  
  if (rest = 0) {
   
si el residuo es cero, emitiremos un prompt con el mensaje "tarjeta de crédito válida"
    
    prompt('tarjeta de credito valida')
 
  }
 
sino devolveremos un prompt con el sgte mensaje.
 
  else {
   
    return prompt('numero de tarjeta incorrecto')
 
  }
 
  return(isValidCard)

};


## DIAGRAMA DE FLUJO

![Diagrama de Flujo](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=diagrama_productofinal_1#R1ZbLcpswFIafhj1IdnC2dd3GM71kxouuVThBSoDDyIeA8%2FQVSCAr5NJF00y88Eg%2F5yJ9%2BoUd8W3Vf9Wikd8xhzJicd5H%2FHPE2CZl5nsQTlZYrVMrFFrlVkq8cFAP4MTYqa3K4RgEEmJJqgnFDOsaMgo0oTV2YdgNlmHXRhSwEA6ZKJfqL5WTdNtiqdevQBVy6pxcXNonv0V2V2hsa9cvYvxm%2FNjHlZhquY0epcixO5P4LuJbjUh2VPVbKAe0Ezab9%2BWZp%2FO6NdT0Nwkrm3AvyhamFY%2FrotPEAnKDxk1Rk8QCa1HuvPpp3C8MFWMzk1SVZpiY4S0QndzpipbQSL7CN8TGxdmeQ6Nnt%2BGkI7Y6c1Fs5mVsCFgB6ZMJ0VAKUvdhKeEMUcxxc%2Bo1KtOExc67K%2B6Oxlk3uYjDEiR0AeSyPFozOFuGl0bgT8NnC%2Fj7H%2Fvt%2FufiCDzggVYnFcGhESOHzty%2FELorCpqgfxnnkp1L4GnIYHJr5%2B9CMmny7B48RnVOO%2BD0ApT0Azty%2FV8cydmbOXK9gK9Gho9PwLy2mmEooRcGnQHWgFamEWivXk8SexfTzhf3Nddu%2FoFrN6%2B79r0vMX%2FDW2ym%2FjfL%2Bs7%2FL%2BC7Pw%3D%3D "diagrama")

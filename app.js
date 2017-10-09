//Aquí debemos poner el código del segundo producto 
//y no OLVIDES DARLE CTRL+S para guardar los cambios ;)

//function isValidCard(array){
  var cardNumber=parseInt(prompt('Ingrese su número de Tarjeta \n Nota: Debe contener 16 números y sin espacios.'));
  for(i=0;cardNumber.length<16;i++){
    if (cardNumber!==" "){
      return (cardNumber.splice(i, 0, cardNumber.pop()));
    } return(cardNumber);
  }
   //return();
 //}
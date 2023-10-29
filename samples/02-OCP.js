/** 
 * O - Principio de Abierto/Cerrado (Open/Closed Principle - OCP):
    El principio OCP establece que las entidades de software, como clases, módulos o funciones, deben estar abiertas para la extensión pero cerradas para la modificación. Esto significa que se deben poder agregar nuevas funcionalidades sin cambiar el código existente. Esto se logra mediante la creación de interfaces y extensiones en lugar de modificar el código base.
    Ejemplo: unas gafas en las que se pueden poner cristales encima a modo de gafas de sol. La montura no puede
    cambiar (modificación) pero sí el cristal (extensión).
 */

function processPaymentWithCard(price, cardDetails) {
  // Logic to process the payment with credit card
  console.log(`Processing payment of ${price} with credit card...`);
}

function processPaymentWithPaypal(price, paypalDetails) {
  // Logic to process the payment with Paypal
  console.log(`Processing payment of ${price} with Paypal...`);
}

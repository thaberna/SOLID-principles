/**
 * L - Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP):
    El principio LSP se refiere a la capacidad de sustituir una instancia de una clase derivada (subclase) por una instancia de su clase base (superclase) sin alterar el comportamiento correcto del programa. Esto garantiza la coherencia del programa cuando se utilizan herencias y polimorfismo.
    Ejemplo: para una receta de tarta de frutas el elemento base es la fruta. Podemos utilizar la misma base para
    hacer esta receta y el comportamiento será el mismo (tarta de manzana, de plátano).
 */

function makeRequest(url, errorHandler) {
  fetch(url)
    .then((response) => response.json())
    .catch((error) => errorHandler.handle(error));
}

const consoleErrorHandler = {
  handle: function (error) {
    console.log(error);
  },
};

const externalErrorHandler = {
  handle: function (error) {
    sendErrorToExternalService(error);
  },
};

makeRequest("https://my-api.com/data", consoleErrorHandler);
makeRequest("https://my-api.com/data", externalErrorHandler);

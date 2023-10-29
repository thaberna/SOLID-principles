Ejemplo de código de los principios SOLID:

## S - Principio de Responsabilidad Única

Este principio establece que una clase debe tener una sola razón para cambiar.
En otras palabras, una clase debe tener una única responsabilidad o función. Si
una clase tiene más de una responsabilidad, es más probable que se vuelva
difícil de mantener y modificar.

```bash
const employee = {
  name: "John Doe",
  hoursWorked: 40,
  payPerHour: 10,
};

function calculateSalary(employee) {
  return employee.hoursWorked * employee.payPerHour;
}

function generateReport(employee, salary) {
  const report = `
        Name: ${employee.name}
        Hours worked: ${employee.hoursWorked}
        Pay per hour: ${employee.payPerHour}
        Total salary: ${salary}
    `;

  console.log(report);
}

const salary = calculateSalary(employee);
generateReport(employee, salary);
```

## O - Principio de Abierto/Cerrado

El principio OCP establece que las entidades de software, como clases, módulos o
funciones, deben estar abiertas para la extensión pero cerradas para la
modificación. Esto significa que se deben poder agregar nuevas funcionalidades
sin cambiar el código existente. Esto se logra mediante la creación de
interfaces y extensiones en lugar de modificar el código base.

```bash
function processPaymentWithCard(price, cardDetails) {
  // Logic to process the payment with credit card
  console.log(`Processing payment of ${price} with credit card...`);
}

function processPaymentWithPaypal(price, paypalDetails) {
  // Logic to process the payment with Paypal
  console.log(`Processing payment of ${price} with Paypal...`);
}
```

## L - Principio de Sustitución de Liskov

El principio LSP se refiere a la capacidad de sustituir una instancia de una
clase derivada (subclase) por una instancia de su clase base (superclase) sin
alterar el comportamiento correcto del programa. Esto garantiza la coherencia
del programa cuando se utilizan herencias y polimorfismo.

```bash
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
```

## I - Principio de Segregación de Interfaces

El principio ISP sugiere que las interfaces deben ser específicas para las
necesidades de las clases que las implementan. En lugar de tener una única
interfaz grande que incluye múltiples métodos, es preferible tener varias
interfaces pequeñas y específicas. Esto evita que las clases implementen métodos
innecesarios y se centren solo en lo que necesitan.

```bash
class Product {
  getDetails() {}

  displayInFrontEnd() {}
}

class PhysicalProduct extends Product {
  saveToDb() {}
}

class DigitalProduct extends Product {
  // No needs to save in database...
}
```

## D - Principio de Inversión de Dependencia

El principio DIP establece que las clases de alto nivel no deben depender de
clases de bajo nivel, sino que ambas deben depender de abstracciones. Además,
las abstracciones no deben depender de los detalles, sino los detalles deben
depender de las abstracciones. Esto promueve el uso de interfaces o clases
abstractas para reducir acoplamientos rígidos entre componentes del software.

```bash
class MySQLConnection {
  connect() {}
}

class PostgreSQLConnection {
  connect() {}
}

class PasswordReminder {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}
```

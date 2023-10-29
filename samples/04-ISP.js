/**
 * I - Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):
    El principio ISP sugiere que las interfaces deben ser específicas para las necesidades de las clases que las implementan. En lugar de tener una única interfaz grande que incluye múltiples métodos, es preferible tener varias interfaces pequeñas y específicas. Esto evita que las clases implementen métodos innecesarios y se centren solo en lo que necesitan.
    Ejemplo: tenemos una TV y un mando a distancia. Si sólo utilizamos plataformas de streaming y no la televisión
    por cable, no tiene sentido tener en el mando un botón para cambiar de canal.
    También tenemos el ejemplo de la navaja suiza: para abrir un sobre no es necesario utilizar cada uno de los
    instrumentos que proporciona la navaja, con sólo unas tijeras nos bastaría.
 */

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

/**
 * D - Principio de Inversión de Dependencia (Dependency Inversion Principle - DIP):
    El principio DIP establece que las clases de alto nivel no deben depender de clases de bajo nivel, sino que ambas deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino los detalles deben depender de las abstracciones. Esto promueve el uso de interfaces o clases abstractas para reducir acoplamientos rígidos entre componentes del software.
    Ejemplo: para construir una casa sólo necesitamos saber que la vamos a hacer con ladrillos (no de un tipo en 
    concreto). Si más tarde queremos cambiar el tipo de ladrillo, la podemos pintar y no afectará a la arquitectura
    final de la casa.
 */

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

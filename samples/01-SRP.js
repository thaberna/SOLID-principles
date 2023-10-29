/**
 * S - Principio de Responsabilidad Única (Single Responsibility Principle - SRP):
    Este principio establece que una clase debe tener una sola razón para cambiar. En otras palabras, una clase debe tener una única responsabilidad o función. Si una clase tiene más de una responsabilidad, es más probable que se vuelva difícil de mantener y modificar.
    Ejemplo: cada miembro de una orquesta sólo puede realizar una tarea. Un percusionista no puede tocar el piano.

 */

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

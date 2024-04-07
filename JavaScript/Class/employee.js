export class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

export class EmpTable {
  constructor(employees) {
    this.employees = [...employees];
  }
  getHtml() {
    let html = '<table border="1"><tr><th>Ім\'я</th><th>Посада</th>';

    this.employees.forEach((employee) => {
      html += `<tr><td>${employee.name}</td><td>${employee.position}</td>`;
    });
    html += '</table>';
    return html;
  }
}

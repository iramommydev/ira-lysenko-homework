//Function to create and add the table

function createTable(books) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);

  // Function to sort
  function sortTableByColumn(columnIndex, isNumericSort) {
    books.sort((a, b) => {
      const aValue = Object.values(a)[columnIndex];
      const bValue = Object.values(b)[columnIndex];

      // Sort as numbers
      if (isNumericSort) {
        return aValue - bValue;
      }

      // Sort as rows
      return aValue.localeCompare(bValue);
    });

    // Update sorted data 
    updateTableBody();
  }

  // Update tbody
  function updateTableBody() {
    tbody.innerHTML = ''; // Cleaning up existing content
    // Add rows with data
    books.forEach((book) => {
      const row = document.createElement('tr');
      Object.values(book).forEach((text) => {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  }
  // Creating a table header with a click handler for sorting
  const headerRow = document.createElement('tr');
  const headers = ['Назва', 'Автор', 'Рік видання', 'Жанр'];
  headers.forEach((headerText, index) => {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const isNumericSort = index === 2; // Numeric sorting
      sortTableByColumn(index, isNumericSort);
    });
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);

  // Primary filling tbody
  updateTableBody();

  // add table to the containet on the page
  const container = document.getElementById('js-table');
  container.appendChild(table);
}

export default createTable;

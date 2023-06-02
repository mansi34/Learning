// Data for the table
let data = [
    { name: 'Kiran Patel', age: 30, email: 'kiranp@gmail.com' },
    { name: 'Smith Shukla', age: 25, email: 'Smith@gmail.com' },
    
  ];
  
  // Function to generate table rows
  function generateTableRows() {
    let tableRows = '';
    data.forEach((rowData, index) => {
      tableRows += `
        <tr data-index="${index}">
          <td contenteditable>${rowData.name}</td>
          <td contenteditable>${rowData.age}</td>
          <td contenteditable>${rowData.email}</td>
          <td>
            <button onclick="editRow(${index})">Edit</button>
            <button onclick="deleteRow(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
    return tableRows;
  }
  
  // Function to render the table
  function renderTable() {
    const tableBody = document.querySelector('#myTable tbody');
    tableBody.innerHTML = generateTableRows();
  }
  
  // Function to add a new row to the table
  function addRow() {
    data.push({ page: '', age: '', email: '' });
    renderTable();
  }
  
  // Function to edit a row in the table
  function editRow(index) {
    const tableRow = document.querySelector(`#myTable tbody tr[data-index="${index}"]`);
    const [name, age, email] = tableRow.querySelectorAll('td[contenteditable]');
    data[index] = { name: name.innerText, age: age.innerText, email: email.innerText };
  }
  
  // Function to delete a row from the table
  function deleteRow(index) {
    data.splice(index, 1);
    renderTable();
  }
  
  // Initial render of the table
  renderTable();  
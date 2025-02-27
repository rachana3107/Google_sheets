document.addEventListener('DOMContentLoaded', () => {
    // Function to create a new cell
    function createCell() {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.contentEditable = true; // Allow editing
        return cell;
    }

function saveSpreadsheet() {
    const spreadsheetData = [];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        spreadsheetData.push(cell.innerText);
    });
    // Logic to save the spreadsheet data (e.g., to local storage)
    localStorage.setItem('spreadsheetData', JSON.stringify(spreadsheetData));
    console.log("Spreadsheet saved!");
    alert("Spreadsheet has been saved!"); // Added alert for user feedback
}



function loadSpreadsheet() {
    const spreadsheetData = JSON.parse(localStorage.getItem('spreadsheetData'));
    if (spreadsheetData) {
        const spreadsheet = document.getElementById('spreadsheet');
        spreadsheet.innerHTML = ''; // Clear existing cells
        spreadsheetData.forEach(data => {
            const cell = createCell();
            cell.innerText = data;
            spreadsheet.appendChild(cell);
        });
    }
}

function initSpreadsheet(rows, cols) {
    const spreadsheet = document.getElementById('spreadsheet');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
  
            const cell = createCell();
            cell.setAttribute('data-ref', `${String.fromCharCode(65 + j)}${i + 1}`); // Set cell reference (A1, B1, etc.)
            spreadsheet.appendChild(cell);
        }
    }
}



    initSpreadsheet(10, 10);
    loadSpreadsheet(); // Load existing spreadsheet data if available


    // Add event listeners for buttons
    document.getElementById('addRow').addEventListener('click', () => {
        const spreadsheet = document.getElementById('spreadsheet');
        const newRow = document.createElement('div');
        newRow.className = 'row';
        for (let j = 0; j < 10; j++) {
            newRow.appendChild(createCell());
        }
        spreadsheet.appendChild(newRow);
        console.log("Add Row button clicked");
    });

    document.getElementById('bold').addEventListener('click', () => {
        const selectedCells = document.querySelectorAll('.cell.selected');
        selectedCells.forEach(cell => {
            cell.classList.toggle('bold');
        });
    });

    document.getElementById('italic').addEventListener('click', () => {
        const selectedCells = document.querySelectorAll('.cell.selected');
        selectedCells.forEach(cell => {
            cell.classList.toggle('italic');
        });
    });

    document.getElementById('saveSpreadsheet').addEventListener('click', saveSpreadsheet);

});

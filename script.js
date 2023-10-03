let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    if (itemName && price && quantity) {
        const item = { itemName, description, price, quantity };
        inventory.push(item);
        updateTable();
        saveToLocalStorage();
        clearForm();
    }
}

function deleteItem(index) {
    inventory.splice(index, 1);
    updateTable();
    saveToLocalStorage();
}

function updateTable() {
    const table = document.getElementById('inventoryTable');
    const tbody = table.getElementsByTagName('tbody')[0];

    // Clear existing rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Add new rows
    inventory.forEach((item, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerHTML = item.itemName;
        cell2.innerHTML = item.description;
        cell3.innerHTML = item.price;
        cell4.innerHTML = item.quantity;
        cell5.innerHTML = `<button onclick="deleteItem(${index})">Delete</button>`;
    });
}

function saveToLocalStorage() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function clearForm() {
    document.getElementById('itemName').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

// Initial update of the table
updateTable();
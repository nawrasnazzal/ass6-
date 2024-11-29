function addToTable() {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();

    if (!name || !description || !price) {
        alert('Please fill in all fields!');
        return;
    }

    const parsedPrice = parseFloat(price); 
    if (isNaN(parsedPrice)) {
        alert('Please enter a valid number for the price!');
        return;
    }

    const formattedPrice = parsedPrice.toFixed(2); 

    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);

    nameCell.textContent = name;
    descriptionCell.textContent = description;
    priceCell.textContent =" $$"+formattedPrice; 

    document.getElementById('productForm').reset();
}
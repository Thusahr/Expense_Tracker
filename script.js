document.getElementById('add-expense').addEventListener('click', function() {
    // Get the input values
    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;

    // Validate input
    if (name === '' || amount === '') {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    // Add the expense to the list
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `${name} - $${amount}`;
    expenseList.appendChild(expenseItem);

    // Update the total
    const totalAmountElement = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalAmountElement.textContent);
    const newTotal = currentTotal + parseFloat(amount);
    totalAmountElement.textContent = newTotal.toFixed(2);

    // Clear the input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});

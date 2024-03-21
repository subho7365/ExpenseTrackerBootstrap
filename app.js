// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to render expenses
function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const div = document.createElement('div');
        div.className = 'card mb-2';
        div.innerHTML = `
            <div class="card-body">
                <strong>Amount:</strong> $${expense.amount} | 
                <strong>Description:</strong> ${expense.description} | 
                <strong>Category:</strong> ${expense.category} | 
                <button type="button" class="btn btn-sm btn-danger float-right" onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
        expenseList.appendChild(div);
    });
}

// Function to add an expense
function addExpense(event) {
    event.preventDefault();

    const expenseAmount = document.getElementById('expenseAmount').value;
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseCategory = document.getElementById('expenseCategory').value;

    if (expenseAmount && expenseDescription && expenseCategory) {
        const expense = {
            amount: expenseAmount,
            description: expenseDescription,
            category: expenseCategory
        };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
        document.getElementById('expenseForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}

// Initial rendering
renderExpenses();

// Event listener for adding expenses
document.getElementById('expenseForm').addEventListener('submit', addExpense);

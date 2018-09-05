// Variables

const newExpenseForm = document.forms.newExpenseForm;
let expenseTable = document.getElementById("expenseTable");
let date = newExpenseForm.date;
let amount = newExpenseForm.amount;
let category = newExpenseForm.category;
let memo = newExpenseForm.memo;
let balance = incomeInput.value - amount.value;

// Functions

newExpenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newRow = document.createElement("tr");
  let dateData = document.createElement("td");
  let amountData = document.createElement("td");
  let categoryData = document.createElement("td");
  let memoData = document.createElement("td");
  let balanceData = document.createElement("td");
  expenseTable.insertBefore(newRow, expenseTable.childNodes[2]);
  newRow.appendChild(dateData);
  dateData.textContent = date.value;
  newRow.appendChild(amountData);
  amountData.textContent = amount.value;
  newRow.appendChild(categoryData);
  categoryData.textContent = category.value;
  newRow.appendChild(memoData);
  memoData.textContent = memo.value;
  newRow.appendChild(balanceData);
  balanceData.textContent = balance.value;
  newExpenseForm.reset();
});

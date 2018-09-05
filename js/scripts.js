// query selecting HTML DOM nodes
let newBudgetForm = document.forms.newBudgetForm;
let incomeInput = newBudgetForm.income;
let rentInput = document.querySelector("#rentInput");
let billsInput = document.querySelector("#billsInput");
let groceriesInput = document.querySelector("#groceriesInput");
let entertainInput = document.querySelector("#entertainInput");
let personCareInput = document.querySelector("#personCareInput");
let miscInput = document.querySelector("#miscInput");
let newBudgetBtn = document.querySelector("#newBudgetBtn");

// declare values of HTML inputs as variables
let incomeInputVal;
let rentInputVal;
let billsInputVal;
let groceriesInputVal;
let entertainInputVal;
let personCareInputVal;
let miscInputVal;
let totalBudget;
let inputArray;

//Variables for Expense table
const newExpenseForm = document.forms.newExpenseForm;
let expenseTable = document.getElementById("expenseTable");
let date = newExpenseForm.date;
let amount = newExpenseForm.amount;
let category = newExpenseForm.category;
let memo = newExpenseForm.memo;
let balance;

/*
let augustBudget = {
	income: incomeInputVal,
	rent: rentInputVal,
	bills: billsInputVal,
	groceries: groceriesInputVal,
	entertain: entertainInputVal,
	personCare: personCareInputVal,
	misc: miscInputVal
};
*/

// Functions
newBudgetBtn.addEventListener("click", e => {
	incomeInputVal = parseInt(incomeInput.value);
	rentInputVal = parseInt(rentInput.value);
	billsInputVal = parseInt(billsInput.value);
	groceriesInputVal = parseInt(groceriesInput.value);
	entertainInputVal = parseInt(entertainInput.value);
	personCareInputVal = parseInt(personCareInput.value);
	miscInputVal = parseInt(miscInput.value);
  balance = incomeInputVal;

	inputArray = [incomeInputVal, rentInputVal, billsInputVal, groceriesInputVal, entertainInputVal, personCareInputVal, miscInputVal];
	totalBudget = rentInputVal + billsInputVal + groceriesInputVal + entertainInputVal + personCareInputVal + miscInputVal;

	for(index = 0; index < inputArray.length; index++){
		if(!isNaN(inputArray[index]) && inputArray[index] >= 0){
			if(totalBudget === incomeInputVal){
				/*this if statement will:
				1. Provide starting balances for the budget and display
				them in the piechart legend. */
				console.log("yay!");
			} else{
				alert("Your budget doesn't equal your income.");
			}
		} else{
			alert("You didn't enter a valid number.");
		}
	};
  newBudgetForm.reset();
  $('#myModal').modal('hide');
});

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
  newBalance = balance - parseInt(amount.value);
  balanceData.textContent = newBalance;
  balance = newBalance;
  newExpenseForm.reset();
  console.log(newBalance);
});

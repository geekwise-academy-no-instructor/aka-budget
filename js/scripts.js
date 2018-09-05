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

newBudgetBtn.addEventListener("click", e => {
	incomeInputVal = parseInt(incomeInput.value);
	rentInputVal = parseInt(rentInput.value);
	billsInputVal = parseInt(billsInput.value);
	groceriesInputVal = parseInt(groceriesInput.value);
	entertainInputVal = parseInt(entertainInput.value);
	personCareInputVal = parseInt(personCareInput.value);
	miscInputVal = parseInt(miscInput.value);

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
});

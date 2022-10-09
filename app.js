// Mourad Medhat Hassan
// Project Task

// make all number equal zero
document.querySelector(".budget__value").textContent = "0";
document.querySelector(".budget__expenses--value").textContent = "0";
document.querySelector(".budget__income--value").textContent = "0";

// to get date and time
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
console.log(dateTime);

document.querySelector(".budget__title").textContent = dateTime;

// data
var incomeNum = [];
var expenseNum = [];
var totalIncome = 0;
var totalExpense = 0;
var totalBudget = 0;

document.querySelector(".add__btn").addEventListener("click", conf);
function conf() {
  var type = document.querySelector(".add__type").value;
  var descr = document.querySelector(".add__description").value;
  var value = Number(document.querySelector(".add__value").value);

  // inc
  if (type == "inc") {
    // ui
    var income = document.querySelector(".income__list");

    var html =
      '<div class="income__list"><div class="item clearfix" id="income-0"><div class="item__description">' +
      descr +
      '</div><div class="right clearfix"><div class="item__value">+' +
      value +
      '</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    income.innerHTML += html;
    // store in data
    var items = { descr: descr, type: type, value: value };
    incomeNum.push(items);

    // update total income in data and UI
    totalIncome += value;
    document.querySelector(".budget__income--value").textContent = totalIncome;

    // exp
  } else {
    var expense = document.querySelector(".expenses__list");

    // store in data
    var items = { descr: descr, type: type, value: value };
    expenseNum.push(items);

    // update total expense
    totalExpense += value;
    document.querySelector(".budget__expenses--value").textContent =
      totalExpense;

    // percentage
    if (totalBudget != 0) {
      var percentage = (value / totalIncome) * 100;
    }

    // update item in ui
    var html =
      '<div class="item clearfix" id="expense-0"><div class="item__description">' +
      descr +
      '</div><div class="right clearfix"><div class="item__value">- ' +
      value +
      '</div><div class="item__percentage">' +
      percentage +
      '</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    expense.innerHTML += html;
  }

  // totalBudget
  totalBudget = totalIncome - totalExpense;
  document.querySelector(".budget__value").textContent = totalBudget;
}

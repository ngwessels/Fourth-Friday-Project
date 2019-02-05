
// Creating objects and prototypes
function OrderPizza() {
  this.pizzaArray = [];
  this.currentId = 0;
}


OrderPizza.prototype.findOrder = function(id) {
  for (var i = 0; i < this.pizzaArray.length; i++) {
  if (this.pizzaArray[i]) {
    if (this.pizzaArray[i].id == id) {
      return this.pizzaArray[i];
    }
  }
};
return false;
}

OrderPizza.prototype.order = function(pizza) {
  pizza.id = this.assignId();
  console.log(pizza);
  this.pizzaArray.push(pizza);
}

OrderPizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


// Creating Constructor

function addPizza(amount, crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2) {
  this.amount = amount,
  this.crust = crust,
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.meat1 = meat1,
  this.meat2 = meat2,
  this.veggie1 = veggie1,
  this.veggie2 = veggie2

}




// Will compile all pizza types into a string. Alert user what they have ordered and will compile how much it will Constructor

function cost(currentOrder, pizzaOrder) {
  var totalCost = 0;
  var string;
  var array = [];
  var order = pizzaOrder.findOrder(currentOrder);
  var crustType = order.crust;
  var size = order.size;
  var sauce = order.sauce;
  var cheese = order.cheese;
  var meat1 = order.meat1;
  var meat2 = order.meat2;
  var veggie1 = order.veggie1;
  var veggie2 = order.veggie2;
  var amount = order.amount;
  if(size == "Large") {
    totalCost = totalCost + 4;
  } else if(size == "Medium") {
    totalCost = totalCost + 3;
  } else {
    totalCost = totalCost + 2;
  }
  string = " 1 " + size;
  if(cheese == "Extra") {
    totalCost = totalCost + 1;
    string = string + " Extra Cheese "
  }
  if(meat1 != "") {
    string = string + " with " + meat1;
    totalCost = totalCost + 1;
  }
  if(meat2 != "") {
    totalCost = totalCost + 1;
    string = string + " and " + meat2;
  }
  if(veggie1 != "") {
    totalCost = totalCost + 1;
    string = string + ". Vegtables: " + veggie1;
  }
  if(veggie2 != "") {
    totalCost = totalCost + 1;
    string = string + " and " + veggie2;
  }
  string = string + " and it has " + crustType + " and " + sauce +".";
  array.push(string);
  array.push(totalCost);
  console.log(array);
  return array;
}


// Will get new info off new form, after button pressed

function getInfo(amount, pizzaOrder) {
  var crust = $("#crust").val();
  var size = $("#size").val();
  var sauce = $("#sauce").val();
  var cheese = $("#cheese").val();
  var meat1 = $("#meat1").val();
  var meat2 = $("#meat2").val();
  var veggie1 = $("#veggie1").val();
  var veggie2 = $("#veggie2").val();
  var pizza = new addPizza(amount, crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2);
  pizzaOrder.order(pizza);
}

// Will reset form to allow user to put in details of next pizzaArray

function resetForm() {
  document.getElementById("form").reset();
}








$(document).ready(function() {
  var newOrder = new OrderPizza();
  var currentOrder = 1;
  var gettingOrder = 0;
  var amount = 0;
  var total = 0;
  var string = "Your order contains: ";
  $("form#count").submit(function(event) {
    event.preventDefault();
    amount = $("input#amount").val();
    if(amount > 0) {
      $("#count").hide();
      $("#form").show();
    } else {
      $("#count").hide();
      $("#price").text("Im sorry you entered in a number equal to or less than zero. Since we only serve customers and cant give you negative pizzas please come back when you want to order a pizza! Have a nice day!")
    }
  });
  $("form#form").submit(function(event) {
    event.preventDefault();
    getInfo(amount, newOrder);
    var result = cost(currentOrder, newOrder);
    var ul = result[0];
    string = string + ul;
    var price = result[1];
    price = parseInt(price);
    total = total + price;
    currentOrder = currentOrder + 1;
    if(gettingOrder < amount) {
      resetForm();
    } else {
      $("#form").hide();
    }
    gettingOrder = gettingOrder + 1;
    if(gettingOrder == amount) {
      $("#form").hide();
      $("#result").text(string);
      $("#price").text("The Total price comes to: $" + total);
    }
  });
});

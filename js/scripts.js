function orderPizza() {
  this.pizzaArray = [];
  this.currentId = 0;
}


orderPizza.prototype.findOrder = function(id) {
  for (var i = 0; i < this.pizzaArray.length; i++) {
  if (this.pizzaArray[i]) {
    if (this.pizzaArray[i].id == id) {
      return this.pizzaArray[i];
    }
  }
};
return false;
}



orderPizza.prototype.order = function(pizza) {
  debugger;
  pizza.id = this.assignId();
  console.log(pizza);
  this.pizzaArray.push(pizza);
}

orderPizza.prototype.assignId = function() {
  debugger;
  this.currentId += 1;
  return this.currentId;
}

function addPizza(crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2) {
  debugger;
  this.crust = crust,
  this.size = size,
  this.sauce = sauce,
  this.cheese = cheese,
  this.meat1 = meat1,
  this.meat2 = meat2,
  this.veggie1 = veggie1,
  this.veggie2 = veggie2

}

var OrderPizza = new orderPizza();





function cost(currentOrder) {
  debugger;
  var totalCost = 0;
  var string;
  var array = [];
  var order = OrderPizza.findOrder(currentOrder);
  var crustType = order.crust;
  var size = order.size;
  var sauce = order.sauce;
  var cheese = order.cheese;
  var meat1 = order.meat1;
  var meat2 = order.meat2;
  var veggie1 = order.veggie1;
  var veggie2 = order.veggie2;
  if(size == "Large") {
    totalCost = totalCost + 3;
  } else if(size == "Medium") {
    totalCost = totalCost + 2;
  } else {
    totalCost = totalCost + 1;
  }
  string = " 1 " + size;
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

function getInfo() {
  debugger;
  var crust = $("#crust").val();
  var size = $("#size").val();
  var sauce = $("#sauce").val();
  var cheese = $("#cheese").val();
  var meat1 = $("#meat1").val();
  var meat2 = $("#meat2").val();
  var veggie1 = $("#veggie1").val();
  var veggie2 = $("#veggie2").val();
  var pizza = new addPizza(crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2);
  OrderPizza.order(pizza);
}

function getInfo() {
  debugger;
  var crust = $("#crust2").val();
  var size = $("#size2").val();
  var sauce = $("#sauce2").val();
  var cheese = $("#cheese2").val();
  var meat1 = $("#meat3").val();
  var meat2 = $("#meat4").val();
  var veggie1 = $("#veggie3").val();
  var veggie2 = $("#veggie4").val();
  var pizza = new addPizza(crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2);
  OrderPizza.order(pizza);
}







$(document).ready(function() {
  var currentOrder = 1;
  var amount;
  var total;
  var string = "Your order contains: "
  var price;
  $("form#count").submit(function(event) {
    debugger;
    event.preventDefault();
    amount = $("input#amount").val();
    amount = parseInt(amount);
    $("#count").hide();
    $("#form").show();
  });
  $("form#form").submit(function(event) {
    debugger;
    event.preventDefault();
    for(var gettingOrder = 0; gettingOrder < amount; gettingOrder++) {
      if(gettingOrder > 0) {
        $(document).ready(function(){
          $("form#form2").submit(function(event) {
            event.preventDefault();
            getInfo2(currentOrder);
            document.getElementById("form").reset();
          });
        });
      }
      if(gettingOrder == 0) {
        getInfo(amount);
        $("#form2").show();

      }
      if(amount - gettingOrder == 1) {
        $("form").hide();
      }

    }

    var result = cost(currentOrder);
    string = string + result[0];
    price = result[1];
    price = parseInt(price);
    total = total + (price * amount);

    $("#result").text(string);
    $("#price").text("The Total price comes to: $" + price);
    currentOrder = currentOrder + 1;
  });



});

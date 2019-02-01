function orderPizza() {
  this.pizzaArray;
  this.currentId;
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
}


orderPizza.prototype.order = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaArray.push(players);
}

orderPizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function addPizza(crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2) {
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
  var order = OrderPizza.findOrder(currendOrder);
  var crustType = order.crust;
  var size = order.size;
  var sauce = order.sauce;
  var cheese = order.cheese;
  var meat1 = order.meat1;
  var meat2 = order.meat2;
  var veggie1 = order.veggie1;
  var veggie2 = order.veggie2;
  

}







$(document).ready(function() {
  var currentOrder = 0;
  $("form#form").submit(function() {
    var crust = $("input#crust").val();
    var size = $("input#size").val();
    var sauce = $("input#sauce").val();
    var cheese = $("input#cheese").val();
    var meat1 = $("input#meat1").val();
    var meat2 = $("input#meat2").val();
    var veggie1 = $("input#veggie1").val();
    var veggie2 = $("input#veggie2").val();
    var pizza = new addPizza(crust, size, sauce, cheese, meat1, meat2, veggie1, veggie2);
    OrderPizza.order(pizza);
    var total = cost(currentOrder);

    currentOrder = currentOrder + 1;
  });



});

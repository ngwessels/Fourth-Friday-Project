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

function addPizza() {

}

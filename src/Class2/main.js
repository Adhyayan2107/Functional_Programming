// we are getting two prototype for a constructor function!
// ths extra protype can be used to add functions in! so not all object repeat the functions!

function Pizza(curst, toppings, preferences, size) {
  this.curst = curst;
  this.toppings = toppings;
  this.preferences = preferences;
  this.size = size;
}

Pizza.prototype.serve = function () {
  console.log(`Pizza served! with toppings : ${this.toppings} of size ${this.size}`);
};

// this constructor was created only when we used the "new" keyword!

let order1 = new Pizza('thin', ['onion', 'tomatoes'], 'veg', 'medium');
let order2 = new Pizza('thick', ['onion', 'tomatoes', 'corn'], 'veg', 'large');
console.log(order1);
order1.serve();
console.log(order2);
order2.serve();


// why was the need of constructor was required? can't we use a normal function
// we don't have another prototype! just a single one prototype!
// that's why this is not a god approach!


// function createPizza(curst, toppings, preferences, size) {
//   let obj = {};
//   obj.crust = curst;
//   obj.toppings = toppings;
//   obj.preferences = preferences;
//   obj.size = size;
//   obj.serve2 = function(){
//     console.log("Pizza served by normal function!");
//   }
//
//   return obj;
// }
//
// let order3 = createPizza('thin', ['onion', 'tomatoes'], 'veg', 'medium');
// let order4 = createPizza('thick', ['onion', 'tomatoes', 'corn'], 'veg', 'large');
//
// console.log(order3);
// console.log(order4);
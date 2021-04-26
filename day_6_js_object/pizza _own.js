function pizzaOven(crustType,sauseType,cheese,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauseType=sauseType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}
var pizza1=pizzaOven("deep_dish","traditional",["mozzarella"],["pepperoni","sausage"]);
var pizza2=pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza3=pizzaOven("italian","traditional",["feta"],["chichken","sausage"]);
var pizza4=pizzaOven("hand tossed","traditional",["no cheese"],["onions","peperoni"]);

console.log(pizza1)
console.log(pizza2)
console.log(pizza3)
console.log(pizza4)
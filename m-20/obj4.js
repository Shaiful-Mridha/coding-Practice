//How to set property

const shoppingCart = {
  mobile: 3,
  laptops: 2,
  pen: 5,
  keyBoard: 5,
  mouse: 1,
};
console.log(shoppingCart.keyBoard);
console.log(shoppingCart);

//1
shoppingCart.keyBoard = 10;
console.log(shoppingCart);

//2
shoppingCart["keyBoard"] = 15;
console.log(shoppingCart);

//3
var propertyName = "keyBoard";
shoppingCart[propertyName] = 20;
console.log(shoppingCart);

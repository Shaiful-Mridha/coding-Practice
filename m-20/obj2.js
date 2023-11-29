const shoppingCart = {
  mobile: 3,
  laptops: 2,
  pen: 5,
  keyBoard: 5,
  mouse: 1,
};

// simple way to get the property
console.log(shoppingCart);

//to get the property using dot notation 1
var mobileCount = shoppingCart.mobile;
console.log(mobileCount);

//to get the property using array 2
var countMobiles = shoppingCart["mobile"];
console.log(countMobiles);

//to get the property using another way 3
var mobileProperty = "mobile";
console.log(mobileProperty);

var mobileValues = shoppingCart[mobileProperty];
console.log(mobileProperty, mobileValues);

// another way to get the keys
var properties = Object.keys(shoppingCart);
console.log(properties);

// another way to get the values
var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);

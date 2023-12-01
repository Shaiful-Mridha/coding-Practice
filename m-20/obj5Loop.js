const travelInCity = {
  tallinn: 3,
  helsinki: 5,
  stockholm: 7,
  riga: 8,
  oslo: 9,
};

console.log(travelInCity);

const keys = Object.keys(travelInCity);
console.log(keys);

const values = Object.values(travelInCity);
console.log(values);

for (var i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
  var propertyName = keys[i];
  //   console.log(propertyName);

  var propertyValue = travelInCity[propertyName];
  //   console.log(propertyValue);

  console.log(propertyName, propertyValue);
}

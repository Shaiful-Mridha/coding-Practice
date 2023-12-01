const travelInCity = {
  tallinn: 3,
  helsinki: 5,
  stockholm: 7,
  riga: 8,
  oslo: 9,
};

for (var propertyName in travelInCity) {
  console.log(propertyName);
  const value = travelInCity[propertyName];
  console.log(value);
}

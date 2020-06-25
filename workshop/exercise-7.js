// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};
//new array
const foodDuos = function (arr) {
  return Object.keys(arr).map((cibo) => {
    return "with " + cibo + " it is best to have " + arr[cibo];
  });
};

///print function using new array
const printergoBrr = (arr) => {
  arr.forEach((ele) => {
    return console.log("-" + ele);
  });
};
//create new array, print it all at once
printergoBrr(foodDuos(foodPairings));

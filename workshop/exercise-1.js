// Exercise 1
// // The array holds a top-ten list of foods as ranked by Grubhub.

// - #1 and #10 are missing
// - #1 is 'bean burritos'
// - #10 is 'buffalo-flavored cauliflower' (not kidding)

// ### STEP 1

// Declare a function that has three parameters (the `arr`ay, `first` and `last`). This functions should place add first and last to the array, and return the fixed array. You will need to deal with that pesky `undefined` as well.

// // ```js
// // const fixList = (arr, first, last) => {
// //   // magic
// };
// ```
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  const newlist = [...arr];
  newlist.unshift(first);
  newlist.pop();
  newlist.push(last);
  return newlist;
};

const printList = (arr) => {
  for (i = 0; i <= arr.length; i++) {
    console.log(i + ". " + arr[i - 1]);
  }
};

printList(fixList(mostPopularFood, "bean burritos", "buffalo abomination"));

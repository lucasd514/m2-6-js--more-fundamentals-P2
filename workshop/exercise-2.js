// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

printGuestOrder = (early, late) => {
  let newarray = [...early, ...late];

  guests.forEach((attendee, index) => {
    console.log(`${index + 1}. ${attendee}`);
  });
};

/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const names = [
  "Mike",
  "James",
  "Lauren",
  "Jesus",
  "Franklin",
  "JoanofArc",
  "Kermit",
  "Eminem",
  "Bonjovi",
  "Ringo",
  "Aretha",
  "Cleopatra",
  "Phineas",
  "Ferb",
  "Perry",
  "Beyonce",
  "Queen Elizabeth",
  "Spike Lee",
];
const occupations = [
  "Doctor",
  "Accountant",
  "Teacher",
  "Film Director",
  "Singer",
  "Programmer",
  "Frog",
  "Drummer",
  "Genius",
  "Friend",
  "Symbol of the Monarchy",
  "Savior",
  "President",
  "Vetrinarian",
  "Artist",
  "Pyramid Enthusiast",
  "Magician",
  "Vampire",
];

const maxFreeLancers = 30;

const addFreeLancerIntervalId = setInterval(addFreelancer, 4000);

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
];

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freelancerList = document.querySelector("#freelancers");
  const listings = freelancers.map((person) => {
    const newListing = document.createElement("p");
    newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
    return newListing;
  });
  freelancerList.replaceChildren(...listings);
}

/**
 * Add a random shape to the `shapes` array
 */
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  let price = [Math.floor(Math.random() * 100) + 1];

  // TODO: Randomize the size of the shape
  freelancers.push({ name, occupation, price });

  render();

  if (freelancers.length >= maxFreeLancers) {
    clearInterval(addFreeLancerIntervalId);
  }
}

// TODO: Stop adding shapes if we've reached the maximum number of shapes
function avgPrice() {
  const totalPrice = freelancers.price.reduce(
    (total, current) => (total += current),
    0
  );
  const totalLength = freelancers.price.length;
  const aPrice = totalPrice / totalLength;
}
avgPrice();

// const freelancerPrice = document.querySelector("#avg-price");
// const

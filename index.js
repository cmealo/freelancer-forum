/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// 1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.

function makeFreelancer() {
  // pick a random index for NAMES
  const nameIndex = Math.floor(Math.random() * NAMES.length);
  // pick a random index for OCCUPATIONS
  const occIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  // pick a random price within price range
  const priceRand = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );
  // get the actual strings from the arrays
  const name = NAMES[nameIndex];
  const occupation = OCCUPATIONS[occIndex];
  //   const price = priceRand; -- removed per testing; not correct

  // return a freelancer object
  const freelancer = {
    name: name,
    occupation: occupation,
    rate: priceRand,
  };
  return freelancer;
}

// 2. Initialize a state variable to an array of NUM_FREELANCERS freelancer objects.
const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

// 3. Write a function that returns the average rate of all freelancers in state.
function avgRate() {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    // Add the current freelancer's rate to the total
    total += freelancers[i].rate;
  }
  // After the loop, divide total by number of freelancers
  const average = total / freelancers.length;
  return average;
}

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.

// let storAvgRate = avgRate(); -- attempt replace with arrow function instead...

const storAvgRate = () => avgRate();

/////// COMPONENTS ////////

// 5. Write a component function to represent a single freelancer.

function freelancerRow(freelancer) {
  const tr = document.createElement("tr");
  tr.className = "fr-tr";

  const nameCell = document.createElement("td");
  nameCell.className = "fr-namecell";
  nameCell.textContent = freelancer.name;

  const occCell = document.createElement("td");
  occCell.className = "fr-occcell";
  occCell.textContent = freelancer.occupation;

  const rateCell = document.createElement("td");
  rateCell.className = "fr-ratecell";
  rateCell.textContent = `$${freelancer.rate.toFixed(2)}`;

  tr.appendChild(nameCell);
  tr.appendChild(occCell);
  tr.appendChild(rateCell);
  return tr;
}

// 6. Write a component function to represent an array of freelancers.

function freelancerRows(freelancers) {
  const tableBody = document.createElement("tbody");
  tableBody.className = "freelancers";

  // loop through freelancers array
  for (let i = 0; i < freelancers.length; i++) {
    // create a row for each freelancer
    const rowI = freelancerRow(freelancers[i]);
    // append the row to the table body
    tableBody.appendChild(rowI);
  }
  return tableBody;
}

// 7.  Write a component function to represent the average rate of all freelancers.

function averageRateComponent() {
  const p = document.createElement("p");
  p.id = "AverageRate";
  p.textContent = `The average rate is $${avgRate().toFixed(2)}.`;
  return p;
}

// 8. Write and call a render function that will mount the application onto the document.

// === Render ===
function render() {
  // Replace the average rate placeholder
  document.getElementById("AverageRate").replaceWith(averageRateComponent());

  // Replace the table body placeholder
  document
    .getElementById("FreelancerRows")
    .replaceWith(freelancerRows(freelancers));
}
render();

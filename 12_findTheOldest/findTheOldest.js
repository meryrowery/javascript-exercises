const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function findTheOldest(people) {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
      const age = 2024 - people[i].yearOfBirth;
      ages.push({ name: people[i].name, age });
    } else {
      const age = people[i].yearOfDeath - people[i].yearOfBirth;
      ages.push({ name: people[i].name, age });
    }
  }

  console.log(ages);
  // Step 1: Extract ages
  const onlyAges = ages.map((person) => person.age);
  console.log(onlyAges);

  // Step 2: Find the maximum age
  const maxAge = Math.max(...onlyAges);

  // Step 3: Find the person with the maximum age
  const oldestPerson = ages.find((person) => person.age === maxAge);
  return oldestPerson;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

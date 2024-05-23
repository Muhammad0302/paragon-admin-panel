function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
function checkVotingEligibility(age) {
  return age >= 18 ? true : false;
}
const userAge = calculateAge(1990);
const isEligible = checkVotingEligibility(userAge);
console.log('Is the user eligible to vote?', isEligible);

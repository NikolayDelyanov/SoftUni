function hospital(input){

    let periodOfTime = Number(input[0]);

    // Set up initial variables
let numDoctors = 7;
let numExamined = 0;
let numUnexamined = 0;

// Loop through each day in the period
for (let day = 1; day <= numDays; day++) {
  // Check if there are enough doctors for the day's patients
  if (numDoctors >= numPatientsPerDay) {
    numExamined += numPatientsPerDay;
    numDoctors -= numPatientsPerDay;
  } else {
    numExamined += numDoctors;
    numUnexamined += numPatientsPerDay - numDoctors;
    numDoctors = 0;
  }

  // Check if it's the third day and there are more unexamined patients than examined
  if (day % 3 === 0 && numUnexamined > numExamined) {
    const numNewDoctors = numUnexamined - numExamined;
    numDoctors += numNewDoctors;
    numUnexamined = 0;
  }
}

console.log(`Number of examined patients: ${numExamined}`);
console.log(`Number of unexamined patients: ${numUnexamined}`);



}
hospital(["4","7","27","9","1"]);

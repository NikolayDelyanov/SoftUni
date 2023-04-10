function hospital(input) {

    let periodOfTime = Number(input[0]);

    let numDoctors = 7;

    let totalExamined = 0;
    let totalUnexamined = 0;

    for (let index = 1; index <= input.length - 1; index++) {
        let numPatientsPerDay = Number(input[index]);

        let numExamined = 0;
        let numUnexamined = 0;

        if (index % 3 === 0 && numDoctors < numPatientsPerDay) {
            numDoctors++;
        }

        if (numDoctors >= numPatientsPerDay) {
            numExamined = numPatientsPerDay;
            totalExamined += numExamined;

        } else {
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
            totalExamined += numExamined;
            totalUnexamined += numUnexamined;
        }
    }

    console.log(`Treated patients: ${totalExamined}.`);
    console.log(`Untreated patients: ${totalUnexamined}.`);

}
hospital(["4", "7", "27", "9", "1"]);
function hospital(input) {

    let periodOfTime = Number(input[0]);

    for (let index = 1; index <= input.length; index++) {
        let numPatientsPerDay = Number(input[index]);

        let numDoctors = 7;
        let numExamined = 0;
        let numUnexamined = 0;

        let totalExamined = 0;
        let totalUnexamined = 0;

        if (numDoctors >= numPatientsPerDay) {
            numExamined = numPatientsPerDay;
            numDoctors -= numPatientsPerDay;
            numUnexamined = numPatientsPerDay - numExamined;
            totalExamined = (numExamined * 2); 
            totalUnexamined = numUnexamined;


        } else {
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
            totalExamined = (numExamined * 2); 
            totalUnexamined = numUnexamined;

        }

        if (index % 3 === 0 && numDoctors < numPatientsPerDay) {
            numDoctors++;
            numUnexamined--;
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
            totalExamined += numExamined;
            totalUnexamined += numUnexamined;

        }
        console.log(`Treated patients: ${totalExamined}.`);
        console.log(`Untreated patients: ${totalUnexamined}.`);
         

    }

}
hospital(["4", "7", "27", "9", "1"]);
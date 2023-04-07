function hospital(input) {

    let periodOfTime = Number(input[0]);

    for (let index = 1; index <= input.length; index++) {
        let numPatientsPerDay = Number(input[index]);

        let numDoctors = 7;
        let numExamined = 0;
        let numUnexamined = 0;

        if (numDoctors >= numPatientsPerDay) {
            numExamined = numPatientsPerDay;
            numDoctors -= numPatientsPerDay;
            numUnexamined = numPatientsPerDay - numExamined;

        } else {
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
        }

        let totalExamined = (numExamined * 2) + numExamined;
        let totalUnexamined = numUnexamined;

        if (index % 3 === 0 && numDoctors < numPatientsPerDay) {
            numDoctors++;
            numUnexamined--;
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
        }
        

    }


}
hospital(["4", "7", "27", "9", "1"]);
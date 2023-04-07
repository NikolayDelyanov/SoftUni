function hospital(input) {

    let periodOfTime = Number(input[0]);



    for (let index = 1; index <= input.length; index++) {
        let numPatientsPerDay = input[index];

        let numDoctors = 7;
        let numExamined = 0;
        let numUnexamined = 0;

        if (numDoctors >= numPatientsPerDay) {
            numExamined = numPatientsPerDay;
            numDoctors -= numPatientsPerDay;

        } else {
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
        }

        if (numPatientsPerDay % 3 === 0 && numUnexamined > numExamined){
            numDoctors += 1;
            numExamined = numDoctors;
            numUnexamined = numPatientsPerDay - numExamined;
        }

    }

}
hospital(["4","7","27","9","1"]);
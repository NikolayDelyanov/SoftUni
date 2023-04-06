function hospital(input) {

    let periodOfTime = Number(input[0]);
    let numOfPatients = Number(input[1]);

    let numDoctors = 7;
    let numExamined = 0;
    let numUnexamined = 0;

    for (let index = 1; index <= array.length; index++) {
        let numPatientsPerDay = input[index];

        if (numDoctors >= numPatientsPerDay) {
            numExamined += numPatientsPerDay;
            numDoctors -= numPatientsPerDay;
        } else {
            numExamined += numDoctors;
            numUnexamined += numPatientsPerDay;
        }


    }

}
hospital
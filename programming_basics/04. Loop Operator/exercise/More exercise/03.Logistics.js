function logisticts(input) {

    let loadsNum = Number(input[0]);

    let microbus = 0;
    let truck = 0;
    let train = 0;
    let vehicle = 0;

    let totalLoads = 0;
    let average = 0;

    for (let index = 1; index < input.length; index++) {
        let tonnage = Number(input[index]);
        totalLoads += tonnage;

    }

}
logisticts(["4", "1", "5", "16", "3"]);
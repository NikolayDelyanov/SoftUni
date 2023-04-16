function logisticts(input) {

    let loadsNum = Number(input[0]);

    let microbus = 0;
    let truck = 0;
    let train = 0;
    let vehicle = 0;

    let totalLoads = 0;
    let average = 0;

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let index = 1; index < input.length; index++) {
        let tonnage = Number(input[index]);
        totalLoads += tonnage;

        if(tonnage <= 4){
            sum1 = input[index];
        } else if(tonnage <= 11){
            sum2 = input[index];
        } else if(tonnage >= 12){
            sum3 = input[index];
        }
    }

    average = (sum1 * 200 + sum2 * 175 + sum3 * 120)/totalLoads;

}
logisticts(["4", "1", "5", "16", "3"]);
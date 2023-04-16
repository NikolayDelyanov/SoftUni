function logisticts(input) {

    let loadsNum = Number(input[0]);

    let totalLoads = 0;
    let average = 0;

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let index = 1; index < input.length; index++) {
        let tonnage = Number(input[index]);
        totalLoads += tonnage;

        if (tonnage <= 3) {
            sum1 += Number(input[index]);
        } else if (tonnage >= 4 && tonnage <= 11) {
            sum2 += Number(input[index]);
        } else if (tonnage >= 12) {
            sum3 += Number(input[index]);
        }
    }

    average = (sum1 * 200 + sum2 * 175 + sum3 * 120) / totalLoads;

    console.log(average.toFixed(2));
    console.log(`${((sum1 / totalLoads) * 100).toFixed(2)}%`);
    console.log(`${((sum2 / totalLoads) * 100).toFixed(2)}%`);
    console.log(`${((sum3 / totalLoads) * 100).toFixed(2)}%`);

}
logisticts(["5", "2", "10", "20", "1", "7"]);
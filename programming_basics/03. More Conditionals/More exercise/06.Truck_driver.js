function truckDriver(input) {

    let season = input[0];
    let monthKilometers = Number(input[1]);

    let oneSeason = 4;
    let oneMonthSalary = 0;
    let tax = 0;
    let totalSalary = 0;

    switch (season) {
        case 'Spring':
            if (monthKilometers <= 5000) {
                oneMonthSalary = monthKilometers * 0.75;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 10000) {
                oneMonthSalary = monthKilometers * 0.95;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 20000) {
                oneMonthSalary = monthKilometers * 1.45;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            }
            console.log(tax.toFixed(2));
            break;
        case 'Autumn':
            if (monthKilometers <= 5000) {
                oneMonthSalary = monthKilometers * 0.75;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 10000) {
                oneMonthSalary = monthKilometers * 0.95;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 20000) {
                oneMonthSalary = monthKilometers * 1.45;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            }
            console.log(tax.toFixed(2));
            break;
        case 'Summer':
            if (monthKilometers <= 5000) {
                oneMonthSalary = monthKilometers * 0.90;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 10000) {
                oneMonthSalary = monthKilometers * 1.10;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 20000) {
                oneMonthSalary = monthKilometers * 1.45;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            }
            console.log(tax.toFixed(2));
            break;
        case 'Winter':
            if (monthKilometers <= 5000) {
                oneMonthSalary = monthKilometers * 1.05;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 10000) {
                oneMonthSalary = monthKilometers * 1.25;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            } else if (monthKilometers <= 20000) {
                oneMonthSalary = monthKilometers * 1.45;
                totalSalary = oneMonthSalary * oneSeason;
                tax = totalSalary - (0.1 * totalSalary);
            }
            console.log(tax.toFixed(2));
            break;
    }


}
truckDriver(["Winter", "4650"]);
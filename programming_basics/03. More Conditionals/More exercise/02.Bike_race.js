function bikeRace(input) {

    let numJuniors = Number(input[0]);
    let numSeniors = Number(input[1]);
    let route = input[2];

    let juniorsFee = 0;
    let seniorsFee = 0;

    let totalSum = 0;
    let expenses = 0;
    let amountDonated = 0;

    switch (route) {
        case 'trail':
            juniorsFee = 5.50;
            seniorsFee = 7.00;
            totalSum = (numJuniors * juniorsFee) + (numSeniors * seniorsFee);
            expenses = totalSum * (5 / 100);
            amountDonated = totalSum - expenses;
            console.log(amountDonated.toFixed(2));
            break;
        case 'cross-country':
            juniorsFee = 8.00;
            seniorsFee = 9.50;
            totalSum = (numJuniors * juniorsFee) + (numSeniors * seniorsFee);
            if (numJuniors >= 50 || numSeniors >= 50) {
                juniorsFee = juniorsFee * (25 / 100);
            }
            expenses = totalSum * (5 / 100);
            amountDonated = totalSum - expenses;
            console.log(amountDonated.toFixed(2));
            break;
        case 'downhill':
            juniorsFee = 12.25;
            seniorsFee = 13.75;
            totalSum = (numJuniors * juniorsFee) + (numSeniors * seniorsFee);
            expenses = totalSum * (5 / 100);
            amountDonated = totalSum - expenses;
            console.log(amountDonated.toFixed(2));
            break;
        case 'road':
            juniorsFee = 20.00;
            seniorsFee = 21.50;
            totalSum = (numJuniors * juniorsFee) + (numSeniors * seniorsFee);
            expenses = totalSum * (5 / 100);
            amountDonated = totalSum - expenses;
            console.log(amountDonated.toFixed(2));
            break;
    }

}
bikeRace(["10", "20", "trail"]);
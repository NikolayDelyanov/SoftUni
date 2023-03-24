function matchTicket(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let numOfPeople = Number(input[2]);

    let transportPrice = 0;
    let ticketPrice = 0;
    let budgetRemainder = 0;

    switch (category) {
        case 'VIP':
            if (numOfPeople < 5) {
                transportPrice = budget * (75 / 100);
            } else if (numOfPeople < 10) {
                transportPrice = budget * (60 / 100);
            } else if (numOfPeople < 25) {
                transportPrice = budget * (50 / 100);
            } else if (numOfPeople < 50) {
                transportPrice = budget * (40 / 100);
            } else if (numOfPeople > 50) {
                transportPrice = budget * (25 / 100);
            }
            budgetRemainder = budget - transportPrice;
            ticketPrice = 499.99 * numOfPeople;
            break;

        case 'Normal':
            if (numOfPeople < 5) {
                transportPrice = budget * (75 / 100);
            } else if (numOfPeople < 10) {
                transportPrice = budget * (60 / 100);
            } else if (numOfPeople < 25) {
                transportPrice = budget * (50 / 100);
            } else if (numOfPeople < 50) {
                transportPrice = budget * (40 / 100);
            } else if (numOfPeople > 50) {
                transportPrice = budget * (25 / 100);
            }
            budgetRemainder = budget - transportPrice;
            ticketPrice = 249.99 * numOfPeople;
            break;
    }

    let remainder = ticketPrice - budgetRemainder;

    if (ticketPrice < budgetRemainder) {
        console.log(`Yes! You have ${Math.abs(remainder.toFixed(2))} leva left.`);
    } else {
        console.log(`Not enough money! You need ${remainder.toFixed(2)} leva.`);
    }

}
matchTicket(["30000", "VIP", "49"]);
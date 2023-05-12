function easterParty(input) {

    let numberOfGuests = Number(input[0]);
    let priceForOnePerson = Number(input[1]);
    let budget = Number(input[2]);

    if (numberOfGuests >= 10 && numberOfGuests <= 15) {
        priceForOnePerson -= priceForOnePerson * 0.15;
    } else if (numberOfGuests >= 15 && numberOfGuests <= 20) {
        priceForOnePerson -= priceForOnePerson * 0.20;
    } else if (numberOfGuests > 20) {
        priceForOnePerson -= priceForOnePerson * 0.25;
    }

    let priceForCake = budget * (10 / 100);
    let totalSum = (numberOfGuests * priceForOnePerson) + priceForCake;

    if (budget >= totalSum) {
        console.log(`It is party time! ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalSum - budget).toFixed(2)} leva needed.`);
    }

}
easterParty(["8",
    "25",
    "340"]);

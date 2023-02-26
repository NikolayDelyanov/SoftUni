function newHome(input) {

    let flowersType = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;

    switch (flowersType) {
        case 'Roses':
            flowersPrice = numFlowers * 5;
            if (numFlowers > 80) {
                flowersPrice = flowersPrice * 0.90;
            }
            break;
        case 'Dahlias':
            flowersPrice = numFlowers * 3.80;
            if (numFlowers > 90) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case 'Tulips':
            flowersPrice = numFlowers * 2.80;
            if (numFlowers > 80) {
                flowersPrice = flowersPrice * 0.85;
            }
            break;
        case 'Narcissus':
            flowersPrice = numFlowers * 3;
            if (numFlowers < 120) {
                flowersPrice = flowersPrice * 1.15;
            }
            break;
        case 'Gladioulus':
            flowersPrice = numFlowers * 2.50;
            if (numFlowers < 80) {
                flowersPrice = flowersPrice * 1.20;
            }
            break;
    }
    let diff = Math.abs(budget - flowersPrice);
    if (budget >= flowersPrice) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowersType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }

}
newHome(["Roses", "55", "250"]);
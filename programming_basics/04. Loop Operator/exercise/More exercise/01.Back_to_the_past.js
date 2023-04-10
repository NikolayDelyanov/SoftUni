function backToThePast(input) {

    let inheritanceMoney = Number(input[0]);
    let year = Number(input[1]);

    let currentAge = 18;
    let spentMoney = 0;
    let currentMoney = inheritanceMoney;

    for (let index = 1800; index <= year; index++) {

        if (index % 2 === 0) {
            inheritanceMoney -= 12000;
        } else {
            spentMoney = 12000 + (50 * currentAge);
            inheritanceMoney -= spentMoney;
        }

        if (index % 3 === 0) {
            currentAge++;
            currentMoney -= spentMoney;
        }
    }

    if (inheritanceMoney > 0) {
        console.log(`Yes! He will live a carefree life and will have ${(Math.abs(inheritanceMoney)).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(inheritanceMoney)).toFixed(2)} dollars to survive.`);
    }

}
backToThePast(["100000.15", "1808"]);
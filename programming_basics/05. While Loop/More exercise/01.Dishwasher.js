function dishwasher(input) {

    let preparationNum = Number(input[0]);
    let bottlePreparation = 750;
    let oneDish = 5;
    let onePot = 15;
    let index = 1;
    let dishesNum = input[index];
    let totalPreparation = preparationNum * bottlePreparation;
    let sumDish = 0;
    let potSum = 0;

    while (dishesNum !== 'End') {

        let dishCounter = Number(dishesNum);

        if (index % 3 === 0) {
            dishCounter = dishCounter * onePot;
            totalPreparation -= dishCounter;
            potSum += Number(dishesNum);;
        } else {
            dishCounter = dishCounter * oneDish;
            totalPreparation -= dishCounter;
            sumDish += Number(dishesNum);
        }

        if (totalPreparation < 0) {
            console.log(`Not enough detergent, ${Math.abs(totalPreparation)} ml. more necessary!`);
            break;
        }

        index++;
        dishesNum = input[index];
    }

    if (totalPreparation > 0) {
        console.log("Detergent was enough!");
        console.log(`${sumDish} dishes and ${potSum} pots were washed.`);
        console.log(`Leftover detergent ${totalPreparation} ml.`);
    }

}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
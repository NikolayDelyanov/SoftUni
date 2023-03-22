function pets(input) {

    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);

    let neededDogFood = days * dogFood;
    let neededCatFood = days * catFood;
    let neededTurtleFood = (days * turtleFood) / 1000;

    let totalFood = neededDogFood + neededCatFood + neededTurtleFood;

    let remainder = 0;

    if (totalFood <= foodLeft) {
        remainder = foodLeft - totalFood;
        console.log(`${Math.floor(remainder)} kilos of food left.`);
    } else {
        remainder = foodLeft - totalFood;
        console.log(`${Math.abs(Math.floor(remainder))} more kilos of food are needed.`);
    }

}
pets(["5", "10", "2.1", "0.8", "321"]);
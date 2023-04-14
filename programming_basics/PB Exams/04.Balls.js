function balls(input) {

    let ballsNum = Number(input[0]);

    let points = 0;

    let numRedBalls = 0;
    let numOrangeBalls = 0;
    let numYellowBalls = 0;
    let numWhiteBalls = 0;
    let otherNum = 0;
    let divides = 0;

    for (let index = 1; index <= input.length; index++) {
        let numColor = (input[index]);

        if (numColor == "red") {
            points += 5;
            numRedBalls++;
            
        } else if (numColor == "orange") {
            points += 10;
            numOrangeBalls++;

        } else if (numColor == "yellow") {
            points += 15;
            numYellowBalls++;

        } else if (numColor == "white") {
            points += 20;
            numWhiteBalls++;

        } else if (numColor == "black") {
            points = (points / 2);
            divides++;

        } else {
            otherNum++;
        }
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${numRedBalls}`);
    console.log(`Orange balls: ${numOrangeBalls}`);
    console.log(`Yellow balls: ${numYellowBalls}`);
    console.log(`White balls: ${numWhiteBalls}`);
    console.log(`Other colors picked: ${otherNum - 1}`);
    console.log(`Divides from black balls: ${divides}`);

}
balls(["10", "white", "white", "ee", "red", "orange", "red", "black", "black", "black", "black"]);
function balls(input){

let ballsNum = Number(input[0]);

let points = 0;

for (let index = 1; index <= input.length; index++) {
    let numColor = (input[index]);
    
    if(numColor == "red"){
        points += 5;
        console.log(`Red balls: ${Number(ballsNum - numColor)}`);

    } else if(numColor == "orange"){
        points += 10;
        console.log(`Orange balls: ${Number(ballsNum - numColor)}`);

    } else if(numColor == "yellow"){
        points += 15;
        console.log(`Yellow balls: ${Number(ballsNum - numColor)}`);

    } else if(numColor == "white"){
        points += 20;
        console.log(`White balls: ${Number(ballsNum - numColor)}`);

    } else if(numColor == "black"){
        points = (points / 2);
        console.log(`Black balls: ${Number(ballsNum - numColor)}`);

    } else {
        console.log(`Other colors picked: ${Number(ballsNum - numColor)}`);
    }
}


}
balls(["3","white","black","pink"]);
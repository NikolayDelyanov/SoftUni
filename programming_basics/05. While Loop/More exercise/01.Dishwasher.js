function dishwasher(input){

let preparationNum = Number(input[0]);
let bottlePreparation = 750;
let oneDish = 5;
let onePot = 15;
let index = 1;
let dishesNum = input[index];
let totalPreparation = preparationNum * bottlePreparation;
let sumDish = 0;
let potSum = 0;

while(dishesNum !== 'End'){

    let dishCounter = Number(dishesNum);

    if(dishCounter % 3 === 1){
        dishCounter = dishCounter * onePot;
        totalPreparation -= dishCounter;
        potSum +=  Number(dishesNum);;
    } else{
        dishCounter = dishCounter * oneDish;
        totalPreparation -= dishCounter;
        sumDish += Number(dishesNum);
    }

    index++;
    dishesNum = input[index];

}

if(totalPreparation > 0){
    console.log("Detergent was enough!");
    
}


}
dishwasher(["2","53","65","55","End"]);